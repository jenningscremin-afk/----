window.exerciseData = {
  knowledgePoints: [
    {
      title: "导数应用概述",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>导数的几何意义</strong>：函数在某点的导数值等于该点处切线的斜率</li>
            <li style="margin-bottom: 10px;"><strong>导数的物理意义</strong>：位置函数的导数是速度，速度函数的导数是加速度</li>
            <li style="margin-bottom: 10px;"><strong>导数应用的主要内容</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">函数的单调性分析</li>
                <li style="margin-bottom: 5px;">函数的极值问题</li>
                <li style="margin-bottom: 5px;">函数的凹凸性与拐点</li>
                <li style="margin-bottom: 5px;">函数的渐近线</li>
                <li style="margin-bottom: 5px;">实际问题中的最值应用</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "函数的单调性",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>单调性判定定理</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">若$f'(x) > 0$在区间$I$上恒成立，则$f(x)$在$I$上单调递增</li>
                <li style="margin-bottom: 5px;">若$f'(x) < 0$在区间$I$上恒成立，则$f(x)$在$I$上单调递减</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>判断步骤</strong>：
              <ol style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">求函数的导数$f'(x)$</li>
                <li style="margin-bottom: 5px;">求出$f'(x) = 0$的所有实根</li>
                <li style="margin-bottom: 5px;">用这些根将定义域分成若干区间</li>
                <li style="margin-bottom: 5px;">判断$f'(x)$在各区间内的符号</li>
                <li style="margin-bottom: 5px;">确定函数在各区间内的单调性</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "函数的极值",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>极值的必要条件</strong>：若$f(x)$在$x_0$处可导且取得极值，则$f'(x_0) = 0$</li>
            <li style="margin-bottom: 10px;"><strong>第一充分条件</strong>（用一阶导数判断）：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">若$x_0$左侧$f'(x) > 0$，右侧$f'(x) < 0$，则$x_0$为极大值点</li>
                <li style="margin-bottom: 5px;">若$x_0$左侧$f'(x) < 0$，右侧$f'(x) > 0$，则$x_0$为极小值点</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>第二充分条件</strong>（用二阶导数判断）：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">若$f'(x_0) = 0$且$f''(x_0) < 0$，则$x_0$为极大值点</li>
                <li style="margin-bottom: 5px;">若$f'(x_0) = 0$且$f''(x_0) > 0$，则$x_0$为极小值点</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "函数的凹凸性与拐点",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>凹凸性定义</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;"><strong>凹函数</strong>（下凸）：函数图像位于任意两点连线的下方</li>
                <li style="margin-bottom: 5px;"><strong>凸函数</strong>（上凸）：函数图像位于任意两点连线的上方</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>凹凸性判定定理</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">若$f''(x) > 0$在区间$I$上恒成立，则$f(x)$在$I$上是凹函数</li>
                <li style="margin-bottom: 5px;">若$f''(x) < 0$在区间$I$上恒成立，则$f(x)$在$I$上是凸函数</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>拐点定义</strong>：使函数凹凸性发生改变的点称为拐点</li>
            <li style="margin-bottom: 10px;"><strong>拐点的必要条件</strong>：若$(x_0, f(x_0))$是拐点，则$f''(x_0) = 0$或$f''(x_0)$不存在</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "洛必达法则",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #9b59b6; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>洛必达法则的条件</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">极限为 $\\frac{0}{0}$ 型或 $\\frac{\\infty}{\\infty}$ 型</li>
                <li style="margin-bottom: 5px;">分子分母在极限点附近可导</li>
                <li style="margin-bottom: 5px;">$\\lim\\limits_{x \\to a} \\frac{f'(x)}{g'(x)}$ 存在或为无穷大</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>洛必达法则公式</strong>：
              <div style="text-align: center; margin: 10px 0;">
                $\\lim\\limits_{x \\to a} \\frac{f(x)}{g(x)} = \\lim\\limits_{x \\to a} \\frac{f'(x)}{g'(x)}$
              </div>
            </li>
            <li style="margin-bottom: 10px;"><strong>使用步骤</strong>：
              <ol style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">判断极限类型是否为 $\\frac{0}{0}$ 或 $\\frac{\\infty}{\\infty}$</li>
                <li style="margin-bottom: 5px;">对分子分母分别求导</li>
                <li style="margin-bottom: 5px;">计算新极限的值</li>
                <li style="margin-bottom: 5px;">如果仍为未定式，可继续使用洛必达法则</li>
              </ol>
            </li>
            <li style="margin-bottom: 10px;"><strong>注意事项</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">不是所有未定式都能用洛必达法则</li>
                <li style="margin-bottom: 5px;">使用前必须先验证条件</li>
                <li style="margin-bottom: 5px;">有时需要结合其他方法（如等价无穷小）</li>
                <li style="margin-bottom: 5px;">循环使用时要小心，避免无限循环</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "导数的实际应用",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #af7aa1; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>最值应用的一般步骤</strong>：
              <ol style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">分析问题，建立目标函数</li>
                <li style="margin-bottom: 5px;">确定自变量的取值范围</li>
                <li style="margin-bottom: 5px;">求目标函数的导数</li>
                <li style="margin-bottom: 5px;">求出所有驻点和不可导点</li>
                <li style="margin-bottom: 5px;">比较驻点、不可导点和端点的函数值</li>
                <li style="margin-bottom: 5px;">确定最值并回答实际问题</li>
              </ol>
            </li>
            <li style="margin-bottom: 10px;"><strong>常见应用类型</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">几何问题：最大面积、最小周长、最短距离等</li>
                <li style="margin-bottom: 5px;">物理问题：速度、加速度、功率优化等</li>
                <li style="margin-bottom: 5px;">经济问题：最大利润、最小成本、需求优化等</li>
                <li style="margin-bottom: 5px;">工程问题：材料用量、效率优化等</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
  }
],
exercises: [
// 第三章：微分中值定理与导数的应用
// 从专升本真题和教学题库第三章提取的习题（已调整难度）




    {
      id: 1,
      type: "选择题",
      title: "洛必达法则",
      question: "1. （河北高数二2021年）$\\lim\\limits_{x \\to 0} \\frac{x + \\sin 2x}{4x - \\sin x} = $ （）\nA. -1 \nB. 0 \nC. 1 \nD. 2",
      essence: "这道题考查洛必达法则求极限。当极限为 $\\frac{0}{0}$ 型时，可以对分子分母同时求导，然后代入极限值计算。关键是要正确应用洛必达法则的条件和步骤。",
      explanation: `本题考查洛必达法则求极限。
第一步：判断极限类型。当 $x \\to 0$ 时，分子 $x + \\sin 2x \\to 0$，分母 $4x - \\sin x \\to 0$，为 $\\frac{0}{0}$ 型
第二步：应用洛必达法则（分子分母同时求导）
$$\\lim_{x \\to 0} \\frac{x + \\sin 2x}{4x - \\sin x} = \\lim_{x \\to 0} \\frac{1 + 2\\cos 2x}{4 - \\cos x}$$
第三步：代入 $x = 0$ 求值
$$= \\frac{1 + 2\\cos 0}{4 - \\cos 0} = \\frac{1 + 2 \\times 1}{4 - 1} = \\frac{3}{3} = 1$$`,
      answer: "C",
      difficulty: "medium",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 2,
      type: "选择题",
      title: "函数单调性",
      question: "2. （云南2020年）函数 $y = 2x + \\frac{8}{x}$ $(x > 0)$ 的单调递增区间为（）\nA. $(0,2)$ \nB. $[2,+\\infty)$ \nC. $(0,+\\infty)$ \nD. $(0,1)$",
      essence: "这道题考查用导数判断函数单调性。需要先求导数，找到导数为零的点，然后分析导数在各区间的符号，从而确定函数的单调性。注意定义域的限制。",
      explanation: `本题考查用导数判断函数单调性。
第一步：求导数 $y' = 2 - \\frac{8}{x^2}$
第二步：令导数等于零，找临界点。$2 - \\frac{8}{x^2} = 0$，得 $x^2 = 4$，所以 $x = 2$（因为 $x > 0$）
第三步：判断导数符号
当 $0 < x < 2$ 时：$x^2 < 4$，所以 $\\frac{8}{x^2} > 2$，因此 $y' < 0$，函数递减
当 $x > 2$ 时：$x^2 > 4$，所以 $\\frac{8}{x^2} < 2$，因此 $y' > 0$，函数递增
结论：单调递增区间为 $[2,+\\infty)$`,
      answer: "B",
      difficulty: "medium",
      category: "函数单调性",
      method: "导数判断法"
    },
    {
      id: 3,
      type: "判断题",
      title: "极值点判断",
      question: "3. 判断：如果 $f'(x_0) = 0$，那么 $x_0$ 一定是函数 $f(x)$ 的极值点（）\nA. 正确 \nB. 错误 \nC. 需要更多条件 \nD. 只对连续函数正确",
      essence: "这道题考查极值点的判断条件。$f'(x_0) = 0$ 只是极值点的必要条件，不是充分条件。还需要在 $x_0$ 两侧导数变号才能确定是极值点。可以用 $f(x) = x^3$ 作为反例。",
      explanation: `本题考查极值点的判断条件。这个说法是错误的！
$f'(x_0) = 0$ 只是极值点的必要条件，不是充分条件。
反例：$f(x) = x^3$，$f'(x) = 3x^2$，$f'(0) = 0$，但 $x = 0$ 不是极值点！
判断方法：在 $x < 0$ 时，$f'(x) = 3x^2 > 0$，函数递增；在 $x > 0$ 时，$f'(x) = 3x^2 > 0$，函数递增
导数不变号，所以 $x = 0$ 不是极值点，只是拐点
正确的极值判断需要：1. $f'(x_0) = 0$（或不存在）2. 在 $x_0$ 两侧导数变号`,
      answer: "B",
      difficulty: "medium",
      category: "极值",
      method: "概念理解"
    },
    {
      id: 4,
      type: "选择题",
      title: "拐点判断",
      question: "4. 函数 $y = x^3$ 的拐点是（）\nA. $(0,0)$ \nB. $(1,1)$ \nC. 不存在拐点 \nD. $(−1,−1)$",
      essence: "这道题考查拐点的求解。拐点是曲线凹凸性改变的点，需要求二阶导数，找到二阶导数为零的点，然后判断在该点两侧凹凸性是否发生变化。",
      explanation: `本题考查拐点的求解。拐点是曲线凹凸性改变的点。
第一步：求二阶导数。$y = x^3$，$y' = 3x^2$，$y'' = 6x$
第二步：令二阶导数等于零。$6x = 0$，得 $x = 0$
第三步：判断凹凸性变化。当 $x < 0$ 时，$y'' = 6x < 0$，曲线凹向下；当 $x > 0$ 时，$y'' = 6x > 0$，曲线凹向上
凹凸性在 $x = 0$ 处改变！
第四步：求拐点坐标。$y(0) = 0^3 = 0$，拐点为 $(0,0)$`,
      answer: "A",
      difficulty: "easy",
      category: "拐点",
      method: "二阶导数法"
    },
    {
      id: 5,
      type: "选择题",
      title: "最值问题",
      question: "5. 函数 $f(x) = x^2 - 4x + 3$ 在区间 $[0,3]$ 上的最小值是（）\nA. -1 \nB. 0 \nC. 3 \nD. 4",
      essence: "这道题考查闭区间上的最值问题。需要比较驻点和端点的函数值，找出最大值和最小值。先求导数找驻点，然后计算驻点和端点的函数值进行比较。",
      explanation: `本题考查闭区间上的最值问题。方法：比较驻点和端点的函数值
第一步：求导数和驻点。$f'(x) = 2x - 4$，令 $f'(x) = 0$，得 $x = 2$
第二步：计算各点函数值。左端点：$f(0) = 0 - 0 + 3 = 3$；驻点：$f(2) = 4 - 8 + 3 = -1$；右端点：$f(3) = 9 - 12 + 3 = 0$
第三步：比较大小。$f(2) = -1 < f(3) = 0 < f(0) = 3$，最小值为 $-1$`,
      answer: "A",
      difficulty: "easy",
      category: "最值",
      method: "比较法"
    },
    {
      id: 6,
      type: "判断题",
      title: "洛必达法则使用条件",
      question: "6. 判断：对于极限 $\\lim\\limits_{x \\to 0} \\frac{x}{\\sin x}$，可以使用洛必达法则吗？（）\nA. 可以，结果是1 \nB. 可以，结果是0 \nC. 不可以，不满足条件 \nD. 可以，结果不存在",
      essence: "这道题考查洛必达法则的使用条件。当极限为 $\\frac{0}{0}$ 型时，可以使用洛必达法则。需要先判断极限类型，然后应用洛必达法则对分子分母同时求导。",
      explanation: `本题考查洛必达法则的使用条件。
判断是否为 $\\frac{0}{0}$ 型：当 $x \\to 0$ 时，分子 $x \\to 0$；当 $x \\to 0$ 时，分母 $\\sin x \\to 0$
是 $\\frac{0}{0}$ 型，可以用洛必达法则！
应用洛必达法则：$$\\lim_{x \\to 0} \\frac{x}{\\sin x} = \\lim_{x \\to 0} \\frac{1}{\\cos x} = \\frac{1}{\\cos 0} = \\frac{1}{1} = 1$$
另一种方法（重要极限）：$$\\lim_{x \\to 0} \\frac{x}{\\sin x} = \\lim_{x \\to 0} \\frac{1}{\\frac{\\sin x}{x}} = \\frac{1}{1} = 1$$`,
      answer: "A",
      difficulty: "easy",
      category: "洛必达法则",
      method: "条件判断"
    },
    {
      id: 7,
      type: "选择题",
      title: "渐近线",
      question: "7. 函数 $y = \\frac{x}{x-1}$ 的垂直渐近线是（）\nA. $x = 0$ \nB. $x = 1$ \nC. $y = 1$ \nD. $y = 0$",
      essence: "这道题考查垂直渐近线的求解。垂直渐近线是使函数值趋于无穷的垂直线，需要找使分母为零的点，然后验证该点处函数值是否趋于无穷。",
      explanation: `本题考查垂直渐近线的求解。垂直渐近线：使函数值趋于无穷的垂直线
找垂直渐近线的方法：1. 找使分母为零的点 2. 验证该点处函数值趋于无穷
步骤：1. 令分母 $x - 1 = 0$，得 $x = 1$
2. 验证极限：$\\lim_{x \\to 1^+} \\frac{x}{x-1} = +\\infty$，$\\lim_{x \\to 1^-} \\frac{x}{x-1} = -\\infty$
所以 $x = 1$ 是垂直渐近线`,
      answer: "B",
      difficulty: "easy",
      category: "渐近线",
      method: "极限分析"
    },
    
    // ==================== 填空题部分 ====================
    {
      id: 8,
      type: "填空题",
      title: "导数为零的点",
      question: "8. 函数 $f(x) = x^2 - 6x + 5$ 的导数为零的点是 $x = $ ______",
      essence: "这道题考查求导数为零的点。需要先对函数求导，然后令导数等于零，解方程得到导数为零的点。这是求极值点的第一步。",
      explanation: `本题考查求导数为零的点。
第一步：求导数 $f'(x) = 2x - 6$
第二步：令导数等于零 $2x - 6 = 0$，$2x = 6$，$x = 3$
验证：$f'(3) = 2(3) - 6 = 6 - 6 = 0$ ✓`,
      answer: "3",
      difficulty: "easy",
      category: "导数",
      method: "基本求导"
    },
    {
      id: 9,
      type: "填空题",
      title: "极值点",
      question: "9. 函数 $f(x) = x^3 - 3x$ 的极小值点是 $x = $ ______",
      essence: "这道题考查极值点的求解。需要先求导数找驻点，然后通过分析导数在驻点两侧的符号变化来判断是极大值点还是极小值点。",
      explanation: `本题考查极值点的求解。
第一步：求导数 $f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$
第二步：求驻点。令 $f'(x) = 0$，得 $x = 1$ 或 $x = -1$
第三步：判断极值类型（用导数符号变化）
在 $x = -1$ 处：左侧 $f'(x) > 0$，右侧 $f'(x) < 0$，是极大值点
在 $x = 1$ 处：左侧 $f'(x) < 0$，右侧 $f'(x) > 0$，是极小值点
极小值点是 $x = 1$`,
      answer: "1",
      difficulty: "medium",
      category: "极值",
      method: "导数判断"
    },
    {
      id: 10,
      type: "填空题",
      title: "单调递增区间",
      question: "10. 函数 $f(x) = x^3 - 12x$ 的单调递增区间是 ______",
      essence: "这道题考查单调区间的求解。需要先求导数，找到导数为零的点，然后分析导数在各区间的符号，从而确定函数的单调递增和递减区间。",
      explanation: `本题考查单调区间的求解。
第一步：求导数 $f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$
第二步：求驻点。令 $f'(x) = 0$，得 $x = 2$ 或 $x = -2$
第三步：判断导数符号
当 $x < -2$ 时：$(x-2) < 0$，$(x+2) < 0$，所以 $f'(x) > 0$
当 $-2 < x < 2$ 时：$(x-2) < 0$，$(x+2) > 0$，所以 $f'(x) < 0$
当 $x > 2$ 时：$(x-2) > 0$，$(x+2) > 0$，所以 $f'(x) > 0$
单调递增区间：$(-\\infty,-2] \\cup [2,+\\infty)$`,
      answer: "$(-\\infty,-2] \\cup [2,+\\infty)$",
      difficulty: "medium",
      category: "单调性",
      method: "导数判断"
    },
    {
      id: 11,
      type: "填空题",
      title: "拐点",
      question: "11. 函数 $f(x) = x^4 - 2x^2$ 的拐点个数是 ______",
      essence: "这道题考查拐点的求解。拐点是曲线凹凸性改变的点，需要求二阶导数，找到二阶导数为零的点，然后验证在这些点处凹凸性是否发生变化。",
      explanation: `本题考查拐点的求解。
第一步：求二阶导数。$f'(x) = 4x^3 - 4x$，$f''(x) = 12x^2 - 4 = 4(3x^2 - 1)$
第二步：求可能的拐点。令 $f''(x) = 0$：$3x^2 - 1 = 0$，$x^2 = \\frac{1}{3}$，$x = \\pm \\frac{1}{\\sqrt{3}}$
第三步：验证凹凸性变化。在 $x = -\\frac{1}{\\sqrt{3}}$ 两侧，$f''(x)$ 由正变负再变正；在 $x = \\frac{1}{\\sqrt{3}}$ 两侧，$f''(x)$ 由负变正
两个点都是拐点，共2个`,
      answer: "2",
      difficulty: "medium",
      category: "拐点",
      method: "二阶导数法"
    },
    {
      id: 12,
      type: "填空题",
      title: "最大值",
      question: "12. 函数 $f(x) = -x^2 + 4x - 3$ 在区间 $[0,3]$ 上的最大值是 ______",
      essence: "这道题考查闭区间上的最值问题。需要比较驻点和端点的函数值，找出最大值和最小值。先求导数找驻点，然后计算驻点和端点的函数值进行比较。",
      explanation: `本题考查闭区间上的最值。
第一步：求导数和驻点。$f'(x) = -2x + 4$，令 $f'(x) = 0$，得 $x = 2$
第二步：计算各点函数值。端点：$f(0) = -3$；驻点：$f(2) = -4 + 8 - 3 = 1$；端点：$f(3) = -9 + 12 - 3 = 0$
第三步：比较。最大值为 $f(2) = 1$`,
      answer: "1",
      difficulty: "easy",
      category: "最值",
      method: "比较法"
    },
    
    // ==================== 计算题部分 ====================
    {
      id: 13,
      type: "计算题",
      title: "求单调区间",
      question: "13. 求函数 $f(x) = x^3 - 3x^2 + 2$ 的单调区间",
      essence: "这道题考查用导数求函数的单调区间。需要先求导数，找到导数为零的点，然后分析导数在各区间的符号，从而确定函数的单调递增和递减区间。",
      explanation: `第一步：求导数 $f'(x) = 3x^2 - 6x = 3x(x - 2)$
第二步：求驻点。令 $f'(x) = 0$：$3x(x - 2) = 0$，得 $x = 0$ 或 $x = 2$
第三步：列表分析导数符号。在数轴上标出点 0 和 2，分三个区间讨论：
区间 $(-\\infty, 0)$：取 $x = -1$，$f'(-1) = 3(-1)(-3) = 9 > 0$，递增
区间 $(0, 2)$：取 $x = 1$，$f'(1) = 3(1)(-1) = -3 < 0$，递减
区间 $(2, +\\infty)$：取 $x = 3$，$f'(3) = 3(3)(1) = 9 > 0$，递增
第四步：写出结论。单调递增区间：$(-\\infty, 0] \\cup [2, +\\infty)$；单调递减区间：$[0, 2]$`,
      answer: "单调递增区间：$(-\\infty, 0] \\cup [2, +\\infty)$；单调递减区间：$[0, 2]$",
      difficulty: "medium",
      category: "单调性",
      method: "导数法"
    },
    {
      id: 14,
      type: "计算题",
      title: "求极值",
      question: "14. 求函数 $f(x) = x^3 - 6x^2 + 9x + 1$ 的极值",
      essence: "这道题考查用导数求函数的极值。需要先求导数找驻点，然后通过分析导数在驻点两侧的符号变化来判断是极大值点还是极小值点，最后计算极值。",
      explanation: `第一步：求导数 $f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$
第二步：求驻点。令 $f'(x) = 0$：$(x-1)(x-3) = 0$，得 $x = 1$ 或 $x = 3$
第三步：判断极值（用导数符号变化法）。画数轴，标出点 1 和 3：
$x < 1$：选 $x = 0$，$f'(0) = 3(-1)(-3) = 9 > 0$，函数递增
$1 < x < 3$：选 $x = 2$，$f'(2) = 3(1)(-1) = -3 < 0$，函数递减
$x > 3$：选 $x = 4$，$f'(4) = 3(3)(1) = 9 > 0$，函数递增
导数变化：+ → - → +
第四步：确定极值。在 $x = 1$ 处：导数由正变负，是极大值点，$f(1) = 1 - 6 + 9 + 1 = 5$（极大值）
在 $x = 3$ 处：导数由负变正，是极小值点，$f(3) = 27 - 54 + 27 + 1 = 1$（极小值）`,
      answer: "极大值：$f(1) = 5$；极小值：$f(3) = 1$",
      difficulty: "medium",
      category: "极值",
      method: "导数符号法"
    },
    {
      id: 15,
      type: "计算题",
      title: "求拐点",
      question: "15. 求函数 $f(x) = x^4 - 6x^2 + 3$ 的拐点",
      essence: "这道题考查用二阶导数求函数的拐点。拐点是曲线凹凸性改变的点，需要求二阶导数，找到二阶导数为零的点，然后验证在这些点处凹凸性是否发生变化。",
      explanation: `第一步：求一阶导数 $f'(x) = 4x^3 - 12x$
第二步：求二阶导数 $f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$
第三步：求可能的拐点。令 $f''(x) = 0$：$(x-1)(x+1) = 0$，得 $x = 1$ 或 $x = -1$
第四步：判断凹凸性变化
$x < -1$：选 $x = -2$，$f''(-2) = 12(3) = 36 > 0$，凹向上
$-1 < x < 1$：选 $x = 0$，$f''(0) = -12 < 0$，凹向下
$x > 1$：选 $x = 2$，$f''(2) = 12(3) = 36 > 0$，凹向上
凹凸性变化：凹↑ → 凹↓ → 凹↑
第五步：确定拐点。两个点处凹凸性都改变，都是拐点：
$x = -1$：$f(-1) = 1 - 6 + 3 = -2$，拐点 $(-1, -2)$
$x = 1$：$f(1) = 1 - 6 + 3 = -2$，拐点 $(1, -2)$`,
      answer: "拐点：$(-1, -2)$ 和 $(1, -2)$",
      difficulty: "medium",
      category: "拐点",
      method: "二阶导数法"
    },
    {
      id: 16,
      type: "计算题",
      title: "最值问题",
      question: "16. 求函数 $f(x) = x^3 - 3x + 1$ 在区间 $[-2, 2]$ 上的最大值和最小值",
      essence: "这道题考查闭区间上的最值问题。需要比较驻点和端点的函数值，找出最大值和最小值。先求导数找驻点，然后计算驻点和端点的函数值进行比较。",
      explanation: `第一步：求导数和驻点 $f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$
令 $f'(x) = 0$，得 $x = 1$ 或 $x = -1$，两个驻点都在区间 $[-2, 2]$ 内
第二步：计算所有关键点的函数值。需要计算：两个端点和两个驻点
左端点：$f(-2) = (-2)^3 - 3(-2) + 1 = -8 + 6 + 1 = -1$
驻点：$f(-1) = (-1)^3 - 3(-1) + 1 = -1 + 3 + 1 = 3$
驻点：$f(1) = 1^3 - 3(1) + 1 = 1 - 3 + 1 = -1$
右端点：$f(2) = 2^3 - 3(2) + 1 = 8 - 6 + 1 = 3$
第三步：比较大小。$f(-2) = -1$，$f(-1) = 3$，$f(1) = -1$，$f(2) = 3$
最大值：3（在 $x = -1$ 和 $x = 2$ 处取得）；最小值：-1（在 $x = -2$ 和 $x = 1$ 处取得）`,
      answer: "最大值：3；最小值：-1",
      difficulty: "medium",
      category: "最值",
      method: "比较法"
    },
    {
      id: 17,
      type: "计算题",
      title: "洛必达法则",
      question: "17. 用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{x}$",
      essence: "这道题考查洛必达法则求极限。当极限为 $\\frac{0}{0}$ 型时，可以对分子分母同时求导，然后代入极限值计算。需要先判断极限类型，再应用洛必达法则。",
      explanation: `第一步：判断极限类型。当 $x \\to 0$ 时：分子：$e^x - 1 \\to e^0 - 1 = 1 - 1 = 0$；分母：$x \\to 0$
这是 $\\frac{0}{0}$ 型，可以用洛必达法则
第二步：应用洛必达法则。对分子分母同时求导：分子的导数：$(e^x - 1)' = e^x$；分母的导数：$(x)' = 1$
$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = \\lim_{x \\to 0} \\frac{e^x}{1}$$
第三步：计算极限 $$= \\lim_{x \\to 0} e^x = e^0 = 1$$
验证（用泰勒展开）：$e^x = 1 + x + \\frac{x^2}{2!} + ...$
$$\\frac{e^x - 1}{x} = \\frac{x + \\frac{x^2}{2!} + ...}{x} = 1 + \\frac{x}{2!} + ... \\to 1$$`,
      answer: "1",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 18,
      type: "计算题",
      title: "面积最大问题",
      question: "18. 用长度为12米的篱笆围成一个矩形，问矩形的长和宽各为多少时，围成的面积最大？",
      essence: "这道题考查实际应用中的最优化问题。需要建立目标函数和约束条件，然后通过求导找极值点来求解最值。这是导数在实际问题中的重要应用。",
      explanation: `这是一个实际应用的最优化问题。设置变量：设矩形的长为 $x$ 米，宽为 $y$ 米
第一步：建立约束条件。周长 = $2x + 2y = 12$，所以 $x + y = 6$，即 $y = 6 - x$
第二步：建立目标函数。面积 $S = xy = x(6-x) = 6x - x^2$，其中 $0 < x < 6$（长度必须为正）
第三步：求最大值。$S'(x) = 6 - 2x$，令 $S'(x) = 0$：$6 - 2x = 0$，得 $x = 3$
第四步：验证是最大值。$S''(x) = -2 < 0$，所以 $x = 3$ 是最大值点
第五步：求解答案。当 $x = 3$ 时，$y = 6 - 3 = 3$，最大面积 $S = 3 × 3 = 9$ 平方米
答：当矩形的长和宽都为3米（正方形）时，面积最大，为9平方米`,
      answer: "长3米，宽3米，最大面积9平方米",
      difficulty: "medium",
      category: "导数的实际应用",
      method: "最值应用"
    },
    {
      id: 19,
      type: "计算题",
      title: "成本最小问题",
      question: "19. 某工厂生产 $x$ 个产品的成本函数为 $C(x) = x^2 - 10x + 100$（元），求生产多少个产品时成本最低？最低成本是多少？",
      essence: "这道题考查实际应用中的最优化问题。需要分析成本函数，通过求导找极值点来求解最小成本。这是导数在经济学中的重要应用。",
      explanation: `这是一个成本优化问题。
第一步：理解成本函数。$C(x) = x^2 - 10x + 100$，这是一个关于产量 $x$ 的二次函数
第二步：求导数找临界点。$C'(x) = 2x - 10$，令 $C'(x) = 0$：$2x - 10 = 0$，解得 $x = 5$
第三步：判断是最小值。方法一：用二阶导数 $C''(x) = 2 > 0$，二阶导数为正，所以 $x = 5$ 是最小值点
方法二：配方法验证 $C(x) = x^2 - 10x + 100 = (x-5)^2 + 75$，显然当 $x = 5$ 时取最小值
第四步：计算最低成本。$C(5) = 25 - 50 + 100 = 75$
答：生产5个产品时成本最低，最低成本为75元`,
      answer: "生产5个产品，最低成本75元",
      difficulty: "easy",
      category: "导数的实际应用",
      method: "最值应用"
    },
    
    // ==================== 新增简单题目（20-38） ====================
    {
      id: 20,
      type: "判断题",
      title: "导数正负判断",
      question: "20. 判断：如果 $f'(x) > 0$，那么函数 $f(x)$ 在该区间上递增（）\nA. 正确 \nB. 错误",
      essence: "这道题考查导数正负与函数单调性的关系。导数大于零时，函数确实递增。这是最基本的导数应用概念。",
      explanation: `本题考查导数与单调性的关系。这个说法是正确的！
基本原理：导数 $f'(x)$ 表示函数的变化率，当 $f'(x) > 0$ 时，函数值在增加，所以函数 $f(x)$ 递增
举例：$f(x) = 2x + 1$，$f'(x) = 2 > 0$，函数在整个定义域上递增 ✓`,
      answer: "A",
      difficulty: "easy",
      category: "单调性",
      method: "概念理解"
    },
    {
      id: 21,
      type: "判断题",
      title: "极大值判断",
      question: "21. 判断：函数在极大值点处的函数值一定是整个函数的最大值（）\nA. 正确 \nB. 错误",
      essence: "这道题考查极值与最值的区别。极大值只是局部最大，不一定是全局最大。这是学生容易混淆的概念。",
      explanation: `本题考查极值与最值的区别。这个说法是错误的！
解释：极大值：局部最大（比附近的值大）；最大值：全局最大（比所有值都大）
反例：$f(x) = x^3 - 3x$，在 $x = -1$ 处有极大值 $f(-1) = 2$，但当 $x = 10$ 时，$f(10) = 970 > 2$
极大值不是最大值！`,
      answer: "B",
      difficulty: "easy",
      category: "极值",
      method: "概念理解"
    },
    {
      id: 22,
      type: "选择题",
      title: "简单求导",
      question: "22. 函数 $f(x) = x^2 + 2x$ 的导数是（）\nA. $2x$ \nB. $2x + 2$ \nC. $x^2$ \nD. $2$",
      essence: "这道题考查基本求导公式。需要对每一项分别求导：$x^2$ 的导数是 $2x$，$2x$ 的导数是 $2$。",
      explanation: `本题考查基本求导。求导规则：$(x^2)' = 2x$，$(2x)' = 2$
所以：$f'(x) = (x^2 + 2x)' = (x^2)' + (2x)' = 2x + 2$`,
      answer: "B",
      difficulty: "easy",
      category: "求导",
      method: "基本公式"
    },
    {
      id: 23,
      type: "选择题",
      title: "导数为零",
      question: "23. 函数 $f(x) = x^2 - 4x$ 的导数为零时，$x$ 的值是（）\nA. 0 \nB. 2 \nC. 4 \nD. -2",
      essence: "这道题考查求导数为零的点。先求导得 $f'(x) = 2x - 4$，令其等于零求解。",
      explanation: `本题考查导数为零的点。
第一步：求导 $f'(x) = 2x - 4$
第二步：令导数为零 $2x - 4 = 0$，$2x = 4$，$x = 2$`,
      answer: "B",
      difficulty: "easy",
      category: "求导",
      method: "基本计算"
    },
    {
      id: 24,
      type: "填空题",
      title: "简单极值",
      question: "24. 函数 $f(x) = -x^2 + 2x$ 的极大值是 ______",
      essence: "这道题考查二次函数的极值。对于开口向下的抛物线，顶点处取得极大值。可以用导数法或配方法求解。",
      explanation: `本题考查二次函数的极值。
方法一：导数法。$f'(x) = -2x + 2$，令 $f'(x) = 0$：$-2x + 2 = 0$，得 $x = 1$
计算极大值：$f(1) = -1 + 2 = 1$
方法二：配方法。$f(x) = -(x^2 - 2x) = -(x-1)^2 + 1$，显然最大值为 1`,
      answer: "1",
      difficulty: "easy",
      category: "极值",
      method: "基本计算"
    },
    {
      id: 25,
      type: "填空题",
      title: "单调性判断",
      question: "25. 函数 $f(x) = x^3$ 在整个定义域上是单调____（填\"递增\"或\"递减\"）",
      essence: "这道题考查简单函数的单调性。通过求导 $f'(x) = 3x^2 ≥ 0$ 可以判断函数始终递增。",
      explanation: `本题考查函数单调性。求导数：$f'(x) = 3x^2$
分析：$x^2 ≥ 0$ 对所有 $x$ 成立，所以 $f'(x) = 3x^2 ≥ 0$，导数非负，函数递增
答案：递增`,
      answer: "递增",
      difficulty: "easy",
      category: "单调性",
      method: "导数判断"
    },
    {
      id: 26,
      type: "计算题",
      title: "简单速度问题",
      question: "26. 一个物体的位置函数是 $s(t) = 2t^2$（米），求 $t = 1$ 秒时的速度。",
      essence: "这道题考查导数的物理意义。位置函数的导数就是速度函数。只需求导后代入时间值即可。",
      explanation: `本题考查导数的物理意义。知识点：速度 = 位置的导数
第一步：求速度函数 $v(t) = s'(t) = (2t^2)' = 4t$
第二步：代入 $t = 1$，$v(1) = 4 × 1 = 4$ 米/秒
答：$t = 1$ 秒时的速度是 4 米/秒`,
      answer: "4 米/秒",
      difficulty: "easy",
      category: "导数的实际应用",
      method: "导数意义"
    },
    {
      id: 27,
      type: "计算题",
      title: "正方形周长问题",
      question: "27. 正方形的边长为 $x$ 厘米，周长为 $P$ 厘米。求周长对边长的变化率。",
      essence: "这道题考查导数的几何意义。周长函数 $P = 4x$，求导即得变化率。非常简单的线性函数求导。",
      explanation: `本题考查变化率问题。建立函数关系：正方形周长 $P = 4x$
求变化率（求导）：$\\frac{dP}{dx} = 4$
解释：边长每增加 1 厘米，周长增加 4 厘米
答：变化率为 4`,
      answer: "4",
      difficulty: "easy",
      category: "导数的实际应用",
      method: "导数意义"
    },
    {
      id: 28,
      type: "选择题",
      title: "最简单的极限",
      question: "28. $\\lim\\limits_{x \\to 2} (x + 3) = $ （）\nA. 2 \nB. 3 \nC. 5 \nD. 不存在",
      essence: "这道题考查连续函数的极限。对于连续函数，极限值就是函数值，直接代入即可。",
      explanation: `本题考查简单极限。对于连续函数，直接代入：$\\lim_{x \\to 2} (x + 3) = 2 + 3 = 5$`,
      answer: "C",
      difficulty: "easy",
      category: "极限",
      method: "直接代入"
    },
    {
      id: 29,
      type: "判断题",
      title: "二阶导数判断",
      question: "29. 判断：如果 $f''(x) > 0$，则函数图像凹向上（开口向上）（）\nA. 正确 \nB. 错误",
      essence: "这道题考查二阶导数与凹凸性的关系。二阶导数大于零时，函数图像确实凹向上。这是基本概念。",
      explanation: `本题考查二阶导数的几何意义。这个说法是正确的！
记忆方法：$f''(x) > 0$：凹向上（像笑脸 ∪）；$f''(x) < 0$：凹向下（像哭脸 ∩）
例子：$f(x) = x^2$，$f''(x) = 2 > 0$，图像是开口向上的抛物线 ✓`,
      answer: "A",
      difficulty: "easy",
      category: "凹凸性",
      method: "概念理解"
    },
    {
      id: 30,
      type: "填空题",
      title: "常数的导数",
      question: "30. 函数 $f(x) = 5$ 的导数是 ______",
      essence: "这道题考查常数函数的导数。常数的导数永远是0，这是最基本的求导规则。",
      explanation: `本题考查常数的导数。规则：常数的导数 = 0
因为常数不随 $x$ 变化，变化率为 0，$f'(x) = (5)' = 0$`,
      answer: "0",
      difficulty: "easy",
      category: "求导",
      method: "基本公式"
    },
    {
      id: 31,
      type: "计算题",
      title: "简单利润问题",
      question: "31. 某商店卖一件商品，利润函数是 $P(x) = -x^2 + 10x$（元），其中 $x$ 是售价。求售价为多少时利润最大？",
      essence: "这道题考查二次函数的最值应用。对利润函数求导，令导数为零找到最大值点。计算简单，贴近生活。",
      explanation: `本题考查利润最大化问题。
第一步：求导 $P'(x) = -2x + 10$
第二步：令导数为零 $-2x + 10 = 0$，$x = 5$
第三步：验证是最大值。这是开口向下的抛物线，$x = 5$ 是顶点，取最大值
第四步：计算最大利润 $P(5) = -25 + 50 = 25$ 元
答：售价为 5 元时利润最大，最大利润 25 元`,
      answer: "售价 5 元，最大利润 25 元",
      difficulty: "easy",
      category: "导数的实际应用",
      method: "最值应用"
    },
    {
      id: 32,
      type: "计算题",
      title: "简单求导",
      question: "32. 求函数 $f(x) = 3x^2 - 6x + 1$ 的导数",
      essence: "这道题考查多项式函数的求导。每一项分别求导即可，运算简单。",
      explanation: `求多项式的导数，逐项求导：$f(x) = 3x^2 - 6x + 1$
各项求导：$(3x^2)' = 6x$，$(-6x)' = -6$，$(1)' = 0$
所以：$f'(x) = 6x - 6$`,
      answer: "$f'(x) = 6x - 6$",
      difficulty: "easy",
      category: "求导",
      method: "基本公式"
    },
    {
      id: 33,
      type: "选择题",
      title: "函数递减判断",
      question: "33. 函数 $f(x) = -2x + 5$ 在定义域上是（）\nA. 递增 \nB. 递减 \nC. 先增后减 \nD. 先减后增",
      essence: "这道题考查一次函数的单调性。斜率为负的一次函数在整个定义域上递减。",
      explanation: `本题考查一次函数的单调性。求导数：$f'(x) = -2 < 0$
导数恒为负，所以函数在整个定义域上递减。
也可以从斜率理解：斜率 $k = -2 < 0$，直线下降，函数递减`,
      answer: "B",
      difficulty: "easy",
      category: "单调性",
      method: "导数判断"
    },
    {
      id: 34,
      type: "计算题",
      title: "圆的面积变化",
      question: "34. 圆的半径为 $r$，面积为 $A = \\pi r^2$。求面积对半径的变化率。",
      essence: "这道题考查导数的几何意义。对面积函数求导得到变化率，这是圆的周长公式的一个应用。",
      explanation: `本题考查变化率问题。面积函数：$A = \\pi r^2$
求变化率（对 $r$ 求导）：$\\frac{dA}{dr} = 2\\pi r$
意义：变化率 = $2\\pi r$ = 圆的周长，半径增加一点点，面积的增加量约等于周长乘以增量
答：变化率为 $2\\pi r$`,
      answer: "$2\\pi r$",
      difficulty: "easy",
      category: "导数的实际应用",
      method: "导数意义"
    },
    {
      id: 35,
      type: "判断题",
      title: "驻点概念",
      question: "35. 判断：使导数 $f'(x) = 0$ 的点叫做驻点（）\nA. 正确 \nB. 错误",
      essence: "这道题考查驻点的定义。驻点就是导数为零的点，这是基本概念。",
      explanation: `本题考查驻点的定义。这个说法是正确的！
定义：驻点：使 $f'(x) = 0$ 的点，也叫稳定点或临界点
注意：驻点可能是极值点，但不一定是极值点（如 $x^3$ 在 $x=0$）`,
      answer: "A",
      difficulty: "easy",
      category: "基本概念",
      method: "定义理解"
    },
    {
      id: 36,
      type: "填空题",
      title: "二次函数顶点",
      question: "36. 函数 $f(x) = (x-2)^2 + 3$ 的最小值是 ______",
      essence: "这道题考查二次函数的最值。顶点式直接可以看出最小值，不需要求导。",
      explanation: `本题考查二次函数的最值。顶点式：$f(x) = (x-2)^2 + 3$
分析：$(x-2)^2 ≥ 0$，当 $x = 2$ 时，$(x-2)^2 = 0$，最小值 = $0 + 3 = 3$`,
      answer: "3",
      difficulty: "easy",
      category: "最值",
      method: "配方法"
    },
    {
      id: 37,
      type: "计算题",
      title: "简单极限",
      question: "37. 求极限 $\\lim\\limits_{x \\to 1} (x^2 + 2x - 3)$",
      essence: "这道题考查多项式函数的极限。多项式函数连续，直接代入即可求得极限值。",
      explanation: `求多项式函数的极限，直接代入：$\\lim_{x \\to 1} (x^2 + 2x - 3) = 1^2 + 2(1) - 3 = 1 + 2 - 3 = 0$`,
      answer: "0",
      difficulty: "easy",
      category: "极限",
      method: "直接代入"
    },
    {
      id: 38,
      type: "计算题",
      title: "简单距离问题",
      question: "38. 汽车以恒定速度 60 公里/小时行驶，行驶距离 $s$ 与时间 $t$（小时）的关系是 $s = 60t$。求距离对时间的变化率。",
      essence: "这道题考查导数的物理意义。距离对时间的导数就是速度，这是最基本的物理应用。",
      explanation: `本题考查速度概念。距离函数：$s = 60t$
求变化率（求导）：$\\frac{ds}{dt} = 60$ 公里/小时
意义：变化率 = 速度 = 60 公里/小时，每过 1 小时，距离增加 60 公里
答：变化率为 60 公里/小时（即速度）`,
      answer: "60 公里/小时",
      difficulty: "easy",
      category: "导数的实际应用",
      method: "导数意义"
    }
  ]
};