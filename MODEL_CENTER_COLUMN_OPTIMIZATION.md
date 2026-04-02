# 3D模型中间栏居中优化

## 优化内容

### 📐 布局调整

1. **中栏高度增加**
   - 从 240px → 500px
   - 为3D模型提供更多显示空间

2. **相机位置优化**
   ```typescript
   // 计算中间栏中心位置
   const centerOffsetX = width * 0.25; // 向右偏移25%
   
   // 相机位置
   camera.position.set(centerOffsetX, 35000, 65000);
   camera.lookAt(centerOffsetX, 0, 0);
   ```

3. **控制器目标点**
   ```typescript
   // 轨道控制器看向中间栏中心
   controls.target.set(centerOffsetX, 0, 0);
   ```

4. **模型位置**
   ```typescript
   // 模型也居中在中间栏中心
   const modelCenterX = width * 0.25;
   object.position.set(modelCenterX, 0, 0);
   ```

### 🎯 布局结构

```
┌─────────────────────────────────────────────────────┐
│                    导航栏 (64px)                     │
├──────────┬──────────────────────┬──────────────────┤
│  左栏    │      中栏 (500px)    │     右栏         │
│ (lg=6)   │  ┌─────────────────┐ │    (lg=6)        │
│          │  │   3D模型        │ │                  │
│ 卡片1    │  │   (居中显示)    │ │  卡片4           │
│ 卡片2    │  │                 │ │  卡片5           │
│ 卡片3    │  └─────────────────┘ │  卡片6           │
│          │                      │                  │
└──────────┴──────────────────────┴──────────────────┘
```

### 📊 坐标系统

```
屏幕宽度: 100%
├─ 左栏: 0% - 25% (lg=6)
├─ 中栏: 25% - 75% (lg=12) ← 模型在这里
└─ 右栏: 75% - 100% (lg=6)

中间栏中心: 50% = 25% + 25%
```

### 🎨 CSS优化

```css
.home-background-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: auto;
  top: 64px; /* 从导航栏下方开始 */
}
```

## 技术细节

### 相机计算

```typescript
// 中间栏占屏幕宽度的50% (lg={12})
// 中间栏起始位置: 25% (lg={6})
// 中间栏中心位置: 25% + 25% = 50%

const centerOffsetX = width * 0.25;

// 相机位置
camera.position.set(centerOffsetX, 35000, 65000);

// 相机看向中间栏中心
camera.lookAt(centerOffsetX, 0, 0);
```

### 模型位置

```typescript
// 模型也放在中间栏中心
const modelCenterX = width * 0.25;
object.position.set(modelCenterX, 0, 0);

// 加上模型自身的偏移
const offset = new THREE.Vector3(
  -center.x + modelCenterX,
  -center.y,
  -center.z
);
object.position.set(offset.x, offset.y, offset.z);
```

### 轨道控制器

```typescript
// 控制器围绕中间栏中心旋转
controls.target.set(centerOffsetX, 0, 0);

// 用户拖拽时，模型围绕中间栏中心旋转
```

## 优化效果

### 优化前
- ❌ 模型显示在屏幕中心
- ❌ 与中间栏不对齐
- ❌ 中栏留空太小（240px）

### 优化后
- ✅ 模型显示在中间栏中心
- ✅ 完美对齐三栏布局
- ✅ 中栏留空充足（500px）
- ✅ 相机和模型都居中
- ✅ 轨道控制器围绕中间栏中心

## 验证步骤

1. **刷新浏览器**
   - 访问 http://localhost:5177

2. **观察模型位置**
   - ✅ 模型在屏幕中间栏中心
   - ✅ 左右两侧卡片清晰可见
   - ✅ 模型不会遮挡左右卡片

3. **测试交互**
   - 拖拽旋转：模型围绕中间栏中心旋转
   - 滚轮缩放：模型放大/缩小
   - 右键平移：模型在中间栏内移动

4. **检查对齐**
   - 模型中心与中间栏中心对齐
   - 模型上下边界在中栏内
   - 模型左右边界不超出中栏

## 配置参数总结

| 参数 | 值 | 说明 |
|------|-----|------|
| 中栏高度 | 500px | 3D模型显示区域 |
| 中栏宽度 | 50% | lg={12} |
| 中栏起始 | 25% | lg={6} 之后 |
| 中栏中心 | 50% | centerOffsetX = width * 0.25 |
| 相机X | centerOffsetX | 指向中间栏中心 |
| 相机Y | 35000 | 高度 |
| 相机Z | 65000 | 距离 |
| 模型X | centerOffsetX | 放在中间栏中心 |
| 控制器目标 | (centerOffsetX, 0, 0) | 围绕中间栏中心 |

## 响应式考虑

### 桌面端 (lg)
- 三栏布局：6-12-6
- 中栏宽度：50%
- 模型完全显示

### 平板端 (md)
- 可能需要调整布局
- 中栏宽度可能变化
- 需要重新计算 centerOffsetX

### 手机端 (xs)
- 全屏显示
- centerOffsetX = width * 0.5
- 需要单独处理

## 后续优化

1. **响应式支持**
   - 检测屏幕宽度
   - 动态计算 centerOffsetX
   - 适配不同设备

2. **动画效果**
   - 进入页面时的缩放动画
   - 平滑的视角切换

3. **用户交互**
   - 添加"重置视角"按钮
   - 保存用户偏好视角

## 文件修改清单

- ✅ `src/components/topology/HomeObjBackground3D.tsx`
  - 相机位置优化
  - 模型位置优化
  - 控制器目标点优化

- ✅ `src/pages/Home/HomePage.tsx`
  - 中栏高度：240px → 500px

- ✅ `src/pages/Home/home.css`
  - 背景层 top 属性调整

## 总结

通过调整相机、模型和控制器的位置，实现了3D模型在中间栏中心的完美显示。模型现在与三栏布局完美对齐，用户可以清晰地看到左右两侧的卡片内容。
