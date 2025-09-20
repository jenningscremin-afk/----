// 知识点数据
window.exerciseData = {
  knowledgePoints: [
    {
      title: "导数的概念",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>导数的定义</strong>：设函数 $y = f(x)$ 在点 $x_0$ 的某个邻域内有定义，如果极限 $\\lim\\limits_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$ 存在，则称此极限为函数 $f(x)$ 在点 $x_0$ 处的导数，记作 $f'(x_0)$ 或 $\\frac{dy}{dx}\\bigg|_{x=x_0}$</li>
            <li style="margin-bottom: 10px;"><strong>导数的几何意义</strong>：函数 $f(x)$ 在点 $x_0$ 处的导数 $f'(x_0)$ 就是曲线 $y = f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率</li>
            <li style="margin-bottom: 10px;"><strong>导数的物理意义</strong>：如果 $s = s(t)$ 表示质点的位移函数，则 $s'(t_0)$ 表示质点在时刻 $t_0$ 的瞬时速度</li>
            <li style="margin-bottom: 10px;"><strong>可导与连续的关系</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">如果函数 $f(x)$ 在点 $x_0$ 处可导，则 $f(x)$ 在点 $x_0$ 处连续</li>
                <li style="margin-bottom: 5px;">连续不一定可导（如 $f(x) = |x|$ 在 $x = 0$ 处）</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "基本导数公式",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>常数函数</strong>：$(C)' = 0$</li>
            <li style="margin-bottom: 10px;"><strong>幂函数</strong>：$(x^n)' = nx^{n-1}$</li>
            <li style="margin-bottom: 10px;"><strong>指数函数</strong>：$(e^x)' = e^x$，$(a^x)' = a^x \\ln a$</li>
            <li style="margin-bottom: 10px;"><strong>对数函数</strong>：$(\\ln x)' = \\frac{1}{x}$，$(\\log_a x)' = \\frac{1}{x \\ln a}$</li>
            <li style="margin-bottom: 10px;"><strong>三角函数</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$(\\sin x)' = \\cos x$</li>
                <li style="margin-bottom: 5px;">$(\\cos x)' = -\\sin x$</li>
                <li style="margin-bottom: 5px;">$(\\tan x)' = \\sec^2 x$</li>
                <li style="margin-bottom: 5px;">$(\\cot x)' = -\\csc^2 x$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>反三角函数</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}$</li>
                <li style="margin-bottom: 5px;">$(\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}}$</li>
                <li style="margin-bottom: 5px;">$(\\arctan x)' = \\frac{1}{1+x^2}$</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "导数的运算法则",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>线性运算法则</strong>：
              <div class="formula-container">
                $[af(x) + bg(x)]' = af'(x) + bg'(x)$
              </div>
              其中 $a, b$ 为常数
            </li>
            <li style="margin-bottom: 10px;"><strong>乘积法则</strong>：
              <div class="formula-container">
                $[f(x)g(x)]' = f'(x)g(x) + f(x)g'(x)$
              </div>
            </li>
            <li style="margin-bottom: 10px;"><strong>商的法则</strong>：
              <div class="formula-container">
                $\\left[\\frac{f(x)}{g(x)}\\right]' = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$
              </div>
              其中 $g(x) \\neq 0$
            </li>
            <li style="margin-bottom: 10px;"><strong>复合函数求导法则（链式法则）</strong>：
              <div class="formula-container">
                $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$
              </div>
              或记作：$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$
            </li>
            <li style="margin-bottom: 10px;"><strong>反函数求导法则</strong>：
              <div class="formula-container">
                $\\frac{dx}{dy} = \\frac{1}{\\frac{dy}{dx}}$
              </div>
              前提是 $\\frac{dy}{dx} \\neq 0$
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "高阶导数与隐函数求导",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>高阶导数</strong>：函数 $f(x)$ 的导数 $f'(x)$ 的导数称为 $f(x)$ 的二阶导数，记作 $f''(x)$ 或 $\\frac{d^2y}{dx^2}$</li>
            <li style="margin-bottom: 10px;"><strong>常见函数的高阶导数</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$(x^n)^{(k)} = n(n-1)\\cdots(n-k+1)x^{n-k}$</li>
                <li style="margin-bottom: 5px;">$(e^x)^{(n)} = e^x$</li>
                <li style="margin-bottom: 5px;">$(\\sin x)^{(n)} = \\sin(x + \\frac{n\\pi}{2})$</li>
                <li style="margin-bottom: 5px;">$(\\cos x)^{(n)} = \\cos(x + \\frac{n\\pi}{2})$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>隐函数求导</strong>：对于由方程 $F(x,y) = 0$ 确定的隐函数 $y = f(x)$，两边同时对 $x$ 求导，利用复合函数求导法则求出 $\\frac{dy}{dx}$</li>
            <li style="margin-bottom: 10px;"><strong>参数方程求导</strong>：设参数方程为 $\\begin{cases} x = \\phi(t) \\\\ y = \\psi(t) \\end{cases}$，则 $\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\psi'(t)}{\\phi'(t)}$（$\\phi'(t) \\neq 0$）</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "导数的应用",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #af7aa1; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>函数的单调性</strong>：在区间 $I$ 上，若 $f'(x) > 0$，则 $f(x)$ 在 $I$ 上单调递增；若 $f'(x) < 0$，则 $f(x)$ 在 $I$ 上单调递减</li>
            <li style="margin-bottom: 10px;"><strong>函数的极值</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;"><strong>必要条件</strong>：若 $f(x)$ 在 $x_0$ 处取得极值，且 $f'(x_0)$ 存在，则 $f'(x_0) = 0$</li>
                <li style="margin-bottom: 5px;"><strong>第一充分条件</strong>：若 $f'(x_0) = 0$，且在 $x_0$ 左侧 $f'(x) > 0$，右侧 $f'(x) < 0$，则 $x_0$ 为极大值点</li>
                <li style="margin-bottom: 5px;"><strong>第二充分条件</strong>：若 $f'(x_0) = 0$，$f''(x_0) \\neq 0$，则当 $f''(x_0) < 0$ 时为极大值，$f''(x_0) > 0$ 时为极小值</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>函数的凹凸性</strong>：在区间 $I$ 上，若 $f''(x) > 0$，则曲线凹向上（凸函数）；若 $f''(x) < 0$，则曲线凹向下（凹函数）</li>
            <li style="margin-bottom: 10px;"><strong>拐点</strong>：使 $f''(x) = 0$ 或 $f''(x)$ 不存在的点可能是拐点，需要检验 $f''(x)$ 在该点两侧的符号是否改变</li>
            <li style="margin-bottom: 10px;"><strong>渐近线</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;"><strong>垂直渐近线</strong>：$x = a$，当 $\\lim\\limits_{x \\to a} f(x) = \\infty$</li>
                <li style="margin-bottom: 5px;"><strong>水平渐近线</strong>：$y = b$，当 $\\lim\\limits_{x \\to \\infty} f(x) = b$</li>
                <li style="margin-bottom: 5px;"><strong>斜渐近线</strong>：$y = kx + b$，当 $k = \\lim\\limits_{x \\to \\infty} \\frac{f(x)}{x}$，$b = \\lim\\limits_{x \\to \\infty} [f(x) - kx]$</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    }
  ]
};

window.exerciseData = {
  // 知识点
  knowledgePoints: [
    {
      title: "导数的概念",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>导数的定义</strong>：设函数 $y = f(x)$ 在点 $x_0$ 的某个邻域内有定义，如果极限 $\\lim\\limits_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$ 存在，则称此极限为函数 $f(x)$ 在点 $x_0$ 处的导数，记作 $f'(x_0)$ 或 $\\frac{dy}{dx}\\bigg|_{x=x_0}$</li>
            <li style="margin-bottom: 10px;"><strong>导数的几何意义</strong>：函数 $f(x)$ 在点 $x_0$ 处的导数 $f'(x_0)$ 就是曲线 $y = f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率</li>
            <li style="margin-bottom: 10px;"><strong>导数的物理意义</strong>：如果 $s = s(t)$ 表示质点的位移函数，则 $s'(t_0)$ 表示质点在时刻 $t_0$ 的瞬时速度</li>
            <li style="margin-bottom: 10px;"><strong>可导与连续的关系</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">如果函数 $f(x)$ 在点 $x_0$ 处可导，则 $f(x)$ 在点 $x_0$ 处连续</li>
                <li style="margin-bottom: 5px;">连续不一定可导（如 $f(x) = |x|$ 在 $x = 0$ 处）</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "基本导数公式",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>常数函数</strong>：$(C)' = 0$</li>
            <li style="margin-bottom: 10px;"><strong>幂函数</strong>：$(x^n)' = nx^{n-1}$</li>
            <li style="margin-bottom: 10px;"><strong>指数函数</strong>：$(e^x)' = e^x$，$(a^x)' = a^x \\ln a$</li>
            <li style="margin-bottom: 10px;"><strong>对数函数</strong>：$(\\ln x)' = \\frac{1}{x}$，$(\\log_a x)' = \\frac{1}{x \\ln a}$</li>
            <li style="margin-bottom: 10px;"><strong>三角函数</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$(\\sin x)' = \\cos x$</li>
                <li style="margin-bottom: 5px;">$(\\cos x)' = -\\sin x$</li>
                <li style="margin-bottom: 5px;">$(\\tan x)' = \\sec^2 x$</li>
                <li style="margin-bottom: 5px;">$(\\cot x)' = -\\csc^2 x$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>反三角函数</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}$</li>
                <li style="margin-bottom: 5px;">$(\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}}$</li>
                <li style="margin-bottom: 5px;">$(\\arctan x)' = \\frac{1}{1+x^2}$</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "导数的运算法则",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>线性运算法则</strong>：
              <div class="formula-container">
                $[af(x) + bg(x)]' = af'(x) + bg'(x)$
              </div>
              其中 $a, b$ 为常数
            </li>
            <li style="margin-bottom: 10px;"><strong>乘积法则</strong>：
              <div class="formula-container">
                $[f(x)g(x)]' = f'(x)g(x) + f(x)g'(x)$
              </div>
            </li>
            <li style="margin-bottom: 10px;"><strong>商的法则</strong>：
              <div class="formula-container">
                $\\left[\\frac{f(x)}{g(x)}\\right]' = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$
              </div>
              其中 $g(x) \\neq 0$
            </li>
            <li style="margin-bottom: 10px;"><strong>复合函数求导法则（链式法则）</strong>：
              <div class="formula-container">
                $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$
              </div>
              或记作：$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$
            </li>
            <li style="margin-bottom: 10px;"><strong>反函数求导法则</strong>：
              <div class="formula-container">
                $\\frac{dx}{dy} = \\frac{1}{\\frac{dy}{dx}}$
              </div>
              前提是 $\\frac{dy}{dx} \\neq 0$
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "高阶导数与隐函数求导",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>高阶导数</strong>：函数 $f(x)$ 的导数 $f'(x)$ 的导数称为 $f(x)$ 的二阶导数，记作 $f''(x)$ 或 $\\frac{d^2y}{dx^2}$</li>
            <li style="margin-bottom: 10px;"><strong>常见函数的高阶导数</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$(x^n)^{(k)} = n(n-1)\\cdots(n-k+1)x^{n-k}$</li>
                <li style="margin-bottom: 5px;">$(e^x)^{(n)} = e^x$</li>
                <li style="margin-bottom: 5px;">$(\\sin x)^{(n)} = \\sin(x + \\frac{n\\pi}{2})$</li>
                <li style="margin-bottom: 5px;">$(\\cos x)^{(n)} = \\cos(x + \\frac{n\\pi}{2})$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>隐函数求导</strong>：对于由方程 $F(x,y) = 0$ 确定的隐函数 $y = f(x)$，两边同时对 $x$ 求导，利用复合函数求导法则求出 $\\frac{dy}{dx}$</li>
            <li style="margin-bottom: 10px;"><strong>参数方程求导</strong>：设参数方程为 $\\begin{cases} x = \\phi(t) \\\\ y = \\psi(t) \\end{cases}$，则 $\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\psi'(t)}{\\phi'(t)}$（$\\phi'(t) \\neq 0$）</li>
          </ul>
        </div>
      </div>

 
    `
    }
  ]
};



window.exerciseData.exercises = [
    // ==================== 选择题部分 ====================
    {
      id: 1,
      type: "选择题",
      title: "导数定义",
      question: "1. （河南2020年）设 $f'(2)=\\frac{1}{2}$，则极限 $\\lim\\limits_{h\\to 0} \\frac{f(2+2h)-f(2)}{\\ln(1+h)} = $ （）\nA. $\\frac{1}{2}$ \nB. $1$ \nC. $-\\frac{1}{2}$ \nD. $-1$",
      essence: "这道题考查导数定义在极限中的应用。需要将极限表达式转化为导数定义的形式，利用已知的导数值和基本极限公式来计算。",
      explanation: `本题考查导数的定义

第一步：识别导数定义形式
$$\\lim\\limits_{h\\to 0}\\frac{f(2+2h)-f(2)}{\\ln(1+h)}$$

第二步：分子分母同时除以 h
$$= \\lim\\limits_{h\\to 0}\\frac{\\frac{f(2+2h)-f(2)}{h}}{\\frac{\\ln(1+h)}{h}}$$

第三步：分子部分
$$\\lim\\limits_{h\\to 0}\\frac{f(2+2h)-f(2)}{h} = 2\\lim\\limits_{h\\to 0}\\frac{f(2+2h)-f(2)}{2h} = 2f'(2) = 2 \\times \\frac{1}{2} = 1$$

第四步：分母部分（利用 $\\lim\\limits_{x\\to 0}\\frac{\\ln(1+x)}{x}=1$）
$$\\lim\\limits_{h\\to 0}\\frac{\\ln(1+h)}{h} = 1$$

因此原极限 = $\\frac{1}{1} = 1$`,
      answer: "B",
      difficulty: "medium",
      category: "导数定义",
      method: "极限与导数定义"
    },
    {
      id: 2,
      type: "选择题",
      title: "分段函数的连续性与可导性",
      question: "2. （山西2022年）设函数 $f(x)=\\begin{cases} x\\sin\\frac{1}{x}, & x\\neq 0 \\\\ 0, & x=0 \\end{cases}$，则 $f(x)$ 在 $x=0$ 处（）\nA. 不连续\nB. 连续但不可导\nC. 可导但不连续\nD. 可导且导数也连续",
      essence: "这道题考查分段函数在分段点处的连续性与可导性判断。需要分别用极限判断连续性和用导数定义判断可导性，注意连续不一定可导。",
      explanation: `本题考查分段函数在分段点处的连续性与可导性

第一步：判断连续性
$$\\lim\\limits_{x\\to 0} f(x) = \\lim\\limits_{x\\to 0} x\\sin\\frac{1}{x}$$

由于 $|\\sin\\frac{1}{x}| \\leq 1$，所以：
$$|x\\sin\\frac{1}{x}| \\leq |x|$$

因此 $\\lim\\limits_{x\\to 0} x\\sin\\frac{1}{x} = 0 = f(0)$

函数在 $x=0$ 处连续

第二步：判断可导性
$$f'(0) = \\lim\\limits_{x\\to 0} \\frac{f(x)-f(0)}{x-0} = \\lim\\limits_{x\\to 0} \\frac{x\\sin\\frac{1}{x}}{x} = \\lim\\limits_{x\\to 0} \\sin\\frac{1}{x}$$

由于 $\\sin\\frac{1}{x}$ 在 $x\\to 0$ 时不存在极限（在 -1 和 1 之间振荡），所以 $f'(0)$ 不存在

函数在 $x=0$ 处不可导`,
      answer: "B",
      difficulty: "medium",
      category: "连续性与可导性",
      method: "极限判断法"
    },
    {
      id: 3,
      type: "选择题",
      title: "可微与可导的关系",
      question: "3. （黑龙江2022年）函数在某点处可微是其在该点处可导的（）\nA. 必要不充分条件\nB. 充分不充分条件\nC. 充分必要条件\nD. 既非充分也非必要条件",
      essence: "这道题考查一元函数可微与可导的关系。对于一元函数，可微与可导是等价的，即充分必要条件。需要理解可微和可导的定义及其等价性。",
      explanation: `本题考查可微与可导的关系

定理：一元函数可微与可导的关系

对于一元函数：
- 可导的定义：$\\lim\\limits_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$ 存在
- 可微的定义：$\\Delta y = A\\Delta x + o(\\Delta x)$，其中 A 是常数

证明等价性：
1. 若函数在某点可导，设导数为 $f'(x_0)$，则：
   $$\\Delta y = f'(x_0)\\Delta x + o(\\Delta x)$$
   因此函数可微

2. 若函数在某点可微，即 $\\Delta y = A\\Delta x + o(\\Delta x)$，则：
   $$\\lim\\limits_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = A$$
   因此函数可导，且导数为 A

结论：一元函数可导与可微是充分必要条件`,
      answer: "C",
      difficulty: "easy",
      category: "可微与可导",
      method: "概念判断"
    },
    {
      id: 4,
      type: "选择题",
      title: "导数的几何意义",
      question: "4. （贵州2022年）已知直线 $l$ 与 $x$ 轴平行，且 $l$ 与曲线 $y = x^2 - e^{x^2}$ 相切，则切点坐标为（）\nA. $(-1,1)$ \nB. $(1,1)$ \nC. $(0,-1)$ \nD. $(0,1)$",
      essence: "这道题考查导数的几何意义应用。切线平行于x轴意味着切线斜率为0，即导数为0。需要求导并解方程 $y' = 0$ 来找到切点。",
      explanation: `本题考查利用导数的几何意义求切点

第一步：求导数
$$y' = 2x - 2xe^{x^2}$$

第二步：利用切线平行于x轴的条件
直线 l 与 x 轴平行，说明切线斜率为0：
$$2x - 2xe^{x^2} = 0$$
$$2x(1 - e^{x^2}) = 0$$

解得：$x = 0$ 或 $e^{x^2} = 1$

当 $e^{x^2} = 1$ 时，$x^2 = 0$，即 $x = 0$

第三步：求切点纵坐标
将 $x = 0$ 代入原曲线：
$$y = 0 - e^0 = -1$$

第四步：得出切点
切点坐标为 $(0, -1)$`,
      answer: "C",
      difficulty: "medium",
      category: "导数几何意义",
      method: "切线斜率法"
    },
    {
      id: 5,
      type: "选择题",
      title: "复合函数求导",
      question: "5. （天津2022年）函数 $y = \\sin(\\cos x)$ 在 $x = \\frac{\\pi}{2}$ 处的导数为（）\nA. $-1$ \nB. $0$ \nC. $1$ \nD. $2$",
      essence: "这道题考查复合函数的求导。需要使用链式法则，先对外层函数求导，再对内层函数求导，最后代入具体点计算导数值。",
      explanation: `本题考查复合函数求导

第一步：应用链式法则
$$y' = \\cos(\\cos x) \\cdot (-\\sin x)$$
$$= -\\sin x \\cos(\\cos x)$$

第二步：代入 $x = \\frac{\\pi}{2}$
$$y'\\bigg|_{x=\\frac{\\pi}{2}} = -\\sin\\frac{\\pi}{2} \\cdot \\cos\\left(\\cos\\frac{\\pi}{2}\\right)$$

第三步：计算各项值
- $\\sin\\frac{\\pi}{2} = 1$
- $\\cos\\frac{\\pi}{2} = 0$
- $\\cos(0) = 1$

第四步：得出结果
$$y'\\bigg|_{x=\\frac{\\pi}{2}} = -1 \\times 1 = -1$$`,
      answer: "A",
      difficulty: "easy",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 6,
      type: "选择题",
      title: "函数的微分",
      question: "9. （山东高数三2020年）函数 $y = \\sqrt[3]{x} + \\sqrt{x}$ 的微分 $dy = $ （）\nA. $\\left(3x^2 + \\frac{\\sqrt{x}}{2}\\right)dx$ \nB. $\\left(\\frac{1}{3\\sqrt[3]{x^2}} + \\frac{1}{2\\sqrt{x}}\\right)dx$ \nC. $\\left(x^2 + \\frac{\\sqrt{x}}{2}\\right)dx$ \nD. $\\left(\\frac{1}{2\\sqrt{x}} + x^2\\right)dx$",
      essence: "这道题考查函数的微分计算。需要先求导数，然后写出微分形式 $dy = y'dx$。注意幂函数的求导公式和根式的指数表示。",
      explanation: `第一步：求导数
$$y = x^{\\frac{1}{3}} + x^{\\frac{1}{2}}$$

第二步：应用幂函数求导公式
$$y' = \\frac{1}{3}x^{-\\frac{2}{3}} + \\frac{1}{2}x^{-\\frac{1}{2}}$$

第三步：化简
$$y' = \\frac{1}{3x^{\\frac{2}{3}}} + \\frac{1}{2\\sqrt{x}}$$
$$= \\frac{1}{3\\sqrt[3]{x^2}} + \\frac{1}{2\\sqrt{x}}$$

第四步：写出微分
$$dy = y'dx = \\left(\\frac{1}{3\\sqrt[3]{x^2}} + \\frac{1}{2\\sqrt{x}}\\right)dx$$`,
      answer: "B",
      difficulty: "easy",
      category: "微分",
      method: "微分公式"
    },
    {
      id: 7,
      type: "选择题",
      title: "复合函数的微分",
      question: "10. （黑龙江2022年）设 $f'(x) = g(x)$，则 $df(\\sin^2 x) = $ （）\nA. $2g(x)\\sin x dx$ \nB. $f(x)\\sin 2x dx$ \nC. $g(\\sin^2 x)\\sin 2x dx$ \nD. $g(\\sin 2x) dx$",
      essence: "这道题考查复合函数的微分计算。需要使用链式法则求导，然后写出微分形式。注意 $f'(x) = g(x)$ 这个条件的使用。",
      explanation: `第一步：设置复合函数
令 $u = \\sin^2 x$，则 $f(\\sin^2 x) = f(u)$

第二步：求导数
由链式法则：
$$\\frac{d}{dx}f(\\sin^2 x) = f'(\\sin^2 x) \\cdot \\frac{d}{dx}(\\sin^2 x)$$

第三步：计算内函数导数
$$\\frac{d}{dx}(\\sin^2 x) = 2\\sin x \\cos x = \\sin 2x$$

第四步：由条件 $f'(x) = g(x)$
$$f'(\\sin^2 x) = g(\\sin^2 x)$$

第五步：写出微分
$$df(\\sin^2 x) = g(\\sin^2 x) \\sin 2x dx$$`,
      answer: "C",
      difficulty: "medium",
      category: "复合函数微分",
      method: "链式法则"
    },
    
    // ==================== 填空题部分 ====================

    {
      id: 8,
      type: "填空题",
      title: "导数的几何意义",
      question: "12. （河南2021年）$y = \\ln x$ 当 $x = $ ______ 时的切线平行于过点 $(1,0), (e,1)$ 的弦",
      essence: "这道题考查导数的几何意义应用。切线平行于弦意味着切线斜率等于弦的斜率。需要先计算弦的斜率，再求导数并令其等于弦的斜率。",
      explanation: `第一步：求弦的斜率
过点 $(1,0)$ 和 $(e,1)$ 的弦的斜率：
$$k = \\frac{1-0}{e-1} = \\frac{1}{e-1}$$

第二步：求函数的导数
$$y = \\ln x \\Rightarrow y' = \\frac{1}{x}$$

第三步：设切点横坐标为 $x_0$
切线斜率 = $\\frac{1}{x_0}$

第四步：根据平行条件
$$\\frac{1}{x_0} = \\frac{1}{e-1}$$

第五步：解得
$$x_0 = e - 1$$`,
      answer: "$e - 1$",
      difficulty: "medium",
      category: "切线问题",
      method: "斜率相等法"
    },
    {
      id: 9,
      type: "填空题",
      title: "切线方程",
      question: "13. （天津2020年）曲线 $y = 2\\ln(2x)$ 在点 $(x_0, 2\\ln(2x_0))$ 处的切线与直线 $2x - y + 5 = 0$ 平行，则 $x_0$ 值为______",
      essence: "这道题考查切线平行于直线的条件。两条直线平行意味着斜率相等，需要求曲线的导数并令其等于给定直线的斜率。",
      explanation: `第一步：求导数
$$y = 2\\ln(2x) \\Rightarrow y' = 2 \\cdot \\frac{1}{2x} \\cdot 2 = \\frac{2}{x}$$

第二步：求直线的斜率
直线 $2x - y + 5 = 0$ 可写为 $y = 2x + 5$
斜率 $k = 2$

第三步：利用平行条件
切线斜率 = 直线斜率
$$\\frac{2}{x_0} = 2$$

第四步：解方程
$$x_0 = 1$$`,
      answer: "$1$",
      difficulty: "easy",
      category: "切线问题",
      method: "平行线斜率相等"
    },
    {
      id: 14,
      type: "填空题",
      title: "参数方程切线",
      question: "14. （江苏2021年）设曲线 $\\begin{cases} x = 3+t+t^2 \\\\ y = 12+10t-2t^2 \\end{cases}$ 在点 P 处切线方程为 $y = 2x + 10$，则切点 P 的坐标为_______",
      essence: "这道题考查参数方程的切线问题。需要先求参数方程的导数 $\\frac{dy}{dx}$，然后利用切线斜率条件求出参数值，最后计算切点坐标。",
      explanation: `第一步：求参数方程的导数
$$\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{10-4t}{1+2t}$$

第二步：由切线斜率条件
$$\\frac{10-4t}{1+2t} = 2$$

第三步：解方程
$$10-4t = 2(1+2t)$$
$$10-4t = 2+4t$$
$$8 = 8t$$
$$t = 1$$

第四步：求切点坐标
当 $t = 1$ 时：
$$x = 3+1+1 = 5$$
$$y = 12+10-2 = 20$$

切点坐标为 $(5, 20)$`,
      answer: "$(5, 20)$",
      difficulty: "hard",
      category: "参数方程",
      method: "参数方程求导"
    },
    {
      id: 15,
      type: "填空题",
      title: "高阶导数",
      question: "15. （江苏2022年）设函数 $f(x) = \\sin 3x$，则 $f^{(2022)}(0) = $ ________",
      essence: "这道题考查高阶导数的计算。需要找出三角函数高阶导数的规律，利用 $\\sin^{(n)}(x) = \\sin(x + \\frac{n\\pi}{2})$ 的公式来计算。",
      explanation: `第一步：求各阶导数规律
$$f(x) = \\sin 3x$$
$$f'(x) = 3\\cos 3x$$
$$f''(x) = -9\\sin 3x$$
$$f'''(x) = -27\\cos 3x$$
$$f^{(4)}(x) = 81\\sin 3x$$

第二步：找出规律
$$f^{(n)}(x) = 3^n \\sin\\left(3x + \\frac{n\\pi}{2}\\right)$$

第三步：代入 $n = 2022$, $x = 0$
$$f^{(2022)}(0) = 3^{2022} \\sin\\left(\\frac{2022\\pi}{2}\\right)$$

第四步：计算角度
$$\\frac{2022\\pi}{2} = 1011\\pi = 1010\\pi + \\pi$$
$$\\sin(1011\\pi) = \\sin(\\pi) = 0$$

第五步：得出结果
$$f^{(2022)}(0) = 0$$`,
      answer: "$0$",
      difficulty: "medium",
      category: "高阶导数",
      method: "导数规律法"
    },

    {
      id: 17,
      type: "填空题",
      title: "三角函数高阶导数",
      question: "17. （福建2020年）若函数 $f(x) = x + \\sin x$，则 $f''(x) = $ ____________",
      essence: "这道题考查三角函数的高阶导数计算。需要逐次求导，先求一阶导数，再求二阶导数。注意常数项的导数为0。",
      explanation: `第一步：求一阶导数
$$f'(x) = 1 + \\cos x$$

第二步：求二阶导数
$$f''(x) = -\\sin x$$`,
      answer: "$-\\sin x$",
      difficulty: "easy",
      category: "高阶导数",
      method: "直接求导"
    },

    {
      id: 19,
      type: "填空题",
      title: "参数方程导数",
      question: "19. （陕西2022年）参数方程 $y = y(x)$ 满足 $\\begin{cases} x = e^{-t} + 1 \\\\ y = e^t + t^2 \\end{cases}$，则 $\\left.\\frac{dy}{dx}\\right|_{t=0} = $ ______",
      essence: "这道题考查参数方程的求导。需要使用参数方程求导公式 $\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$，先分别求 $\\frac{dx}{dt}$ 和 $\\frac{dy}{dt}$，然后代入具体参数值。",
      explanation: `第一步：求导数
$$\\frac{dx}{dt} = -e^{-t}$$
$$\\frac{dy}{dt} = e^t + 2t$$

第二步：求 dy/dx
$$\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{e^t + 2t}{-e^{-t}}$$

第三步：代入 t = 0
$$\\left.\\frac{dy}{dx}\\right|_{t=0} = \\frac{1 + 0}{-1} = -1$$`,
      answer: "$-1$",
      difficulty: "easy",
      category: "参数方程",
      method: "参数方程求导"
    },
    {
      id: 20,
      type: "填空题",
      title: "切线方程",
      question: "20. （浙江2022年）函数 $y = x^3 + e^x$ 在点 $(0,1)$ 处的切线方程为_______",
      essence: "这道题考查切线方程的求解。需要先求导数得到切线斜率，然后利用点斜式方程 $y - y_0 = k(x - x_0)$ 写出切线方程。",
      explanation: `第一步：求导数
$$y' = 3x^2 + e^x$$

第二步：求切线斜率
$$k = y'|_{x=0} = 0 + 1 = 1$$

第三步：写出切线方程
点斜式：$y - 1 = 1(x - 0)$

第四步：化简
$$y = x + 1$$`,
      answer: "$y = x + 1$",
      difficulty: "easy",
      category: "切线方程",
      method: "点斜式"
    },
    
    // ==================== 第二份PDF的题目 ====================

    {
      id: 22,
      type: "选择题",
      title: "复合函数导数",
      question: "22. 设 $f(\\sin^2 x) = \\cos^2 x + 1$，则 $f'(1) = $ （）\nA. -1 \nB. 1 \nC. -2 \nD. 2",
      essence: "这道题考查复合函数的导数计算。需要先通过换元法求出 $f(x)$ 的表达式，然后求导并代入具体值。注意 $\\sin^2 x + \\cos^2 x = 1$ 的关系。",
      explanation: `第一步：求 $f(x)$ 的表达式
设 $u = \\sin^2 x$，则 $\\cos^2 x = 1 - u$
所以 $f(u) = 1 - u + 1 = 2 - u$

第二步：求导数
$$f'(u) = -1$$

第三步：求 $f'(1)$
$$f'(1) = -1$$`,
      answer: "A",
      difficulty: "medium",
      category: "复合函数",
      method: "换元法"
    },
    {
      id: 23,
      type: "选择题",
      title: "对数函数求导",
      question: "23. $f(x) = \\ln\\frac{2-x}{1+x}$，则 $f'(x) = $ （）\nA. $\\frac{1}{x^2-1}$ \nB. $\\frac{-3}{(2-x)(1+x)}$ \nC. $\\frac{1}{2-x} - \\frac{1}{1+x}$ \nD. $\\frac{1}{1+x} - \\frac{1}{2-x}$",
      essence: "这道题考查对数函数的求导。需要先利用对数的性质 $\\ln\\frac{a}{b} = \\ln a - \\ln b$ 化简函数，然后分别对各项求导。",
      explanation: `第一步：化简函数
$$f(x) = \\ln(2-x) - \\ln(1+x)$$

第二步：分别求导
$$f'(x) = \\frac{1}{2-x} \\cdot (-1) - \\frac{1}{1+x} \\cdot 1$$

第三步：化简
$$f'(x) = -\\frac{1}{2-x} - \\frac{1}{1+x}$$
$$= -\\frac{1+x + 2-x}{(2-x)(1+x)}$$
$$= -\\frac{3}{(2-x)(1+x)}$$`,
      answer: "B",
      difficulty: "medium",
      category: "对数函数",
      method: "对数性质"
    },
    {
      id: 24,
      type: "选择题",
      title: "指数函数切线",
      question: "24. 曲线 $y = xe^x$ 在 $x = 0$ 处的切线方程是（）\nA. $y - 2x - 1 = 0$ \nB. $y - 2x - 2 = 0$ \nC. $y - x - 2 = 0$ \nD. $y - x = 0$",
      essence: "这道题考查指数函数乘积的切线方程求解。需要先求导数得到切线斜率，然后利用点斜式方程写出切线方程。注意乘积法则的应用。",
      explanation: `第一步：求切点
当 $x = 0$ 时，$y = 0 \\cdot e^0 = 0$
切点为 $(0, 0)$

第二步：求导数
$$y' = e^x + xe^x = e^x(1 + x)$$

第三步：求切线斜率
$$k = y'|_{x=0} = e^0(1 + 0) = 1$$

第四步：写切线方程
过点 $(0, 0)$，斜率为 1
$$y - 0 = 1(x - 0)$$
$$y = x$$

即 $y - x = 0$`,
      answer: "D",
      difficulty: "easy",
      category: "切线方程",
      method: "点斜式"
    },
    {
      id: 25,
      type: "选择题",
      title: "三角函数微分",
      question: "25. 设函数 $y = \\cos^2 x$，则 $dy = $ （） $dx$\nA. $-2\\sin^2 x$ \nB. $2\\cos^2 x$ \nC. $-2\\sin x \\cos x$ \nD. $2\\sin x \\cos x$",
      essence: "这道题考查三角函数的微分计算。需要使用链式法则求导，然后写出微分形式 $dy = y'dx$。注意 $\\cos^2 x$ 是复合函数。",
      explanation: `第一步：求导数
$$y = \\cos^2 x$$

第二步：应用链式法则
$$y' = 2\\cos x \\cdot (-\\sin x)$$
$$= -2\\sin x \\cos x$$

第三步：写出微分
$$dy = -2\\sin x \\cos x dx$$`,
      answer: "C",
      difficulty: "easy",
      category: "微分",
      method: "链式法则"
    },

    {
      id: 27,
      type: "选择题",
      title: "对数函数高阶导数",
      question: "27. $y = x\\ln x$，则 $y''' = $ （）\nA. $\\ln x$ \nB. $x$ \nC. $\\frac{1}{x^2}$ \nD. $-\\frac{1}{x^2}$",
      essence: "这道题考查对数函数的高阶导数计算。需要逐次求导，先求一阶导数，再求二阶导数，最后求三阶导数。注意乘积法则的应用。",
      explanation: `第一步：求一阶导数
$$y' = \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$$

第二步：求二阶导数
$$y'' = \\frac{1}{x}$$

第三步：求三阶导数
$$y''' = -\\frac{1}{x^2}$$`,
      answer: "D",
      difficulty: "easy",
      category: "高阶导数",
      method: "逐次求导"
    },

    {
      id: 29,
      type: "选择题",
      title: "导数性质",
      question: "29. 若在区间 $(a,b)$ 内恒有 $f'(x) \\equiv g'(x)$，则 $f(x)$ 与 $g(x)$ 在 $(a,b)$ 内（）\nA. $f(x) - g(x) = x$ \nB. 相等 \nC. 仅相差一个常数 \nD. 均为常数",
      essence: "这道题考查导数的性质。如果两个函数的导数在区间内恒等，那么这两个函数只相差一个常数。这是导数的一个重要性质。",
      explanation: `第一步：设 $h(x) = f(x) - g(x)$

第二步：求导
$$h'(x) = f'(x) - g'(x) = 0$$

第三步：应用常数函数性质
若函数在区间内导数恒为0，则函数为常数
$$h(x) = C$$

第四步：得出结论
$$f(x) - g(x) = C$$
$$f(x) = g(x) + C$$

即 $f(x)$ 与 $g(x)$ 仅相差一个常数`,
      answer: "C",
      difficulty: "easy",
      category: "导数性质",
      method: "常数函数判定"
    },

    
    // ==================== 计算题部分 ====================
    {
      id: 31,
      type: "计算题",
      title: "对数函数求导(1)",
      question: "31. 求函数 $y = \\ln(3-2x)$ 的导数",
      essence: "这道题考查对数函数的复合函数求导。需要使用链式法则，先对外层对数函数求导，再对内层线性函数求导。",
      explanation: `第一步：设中间变量
设 $u = 3-2x$，则 $y = \\ln u$

第二步：应用链式法则
$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$

第三步：分别求导
$\\frac{dy}{du} = \\frac{1}{u}$
$\\frac{du}{dx} = -2$

第四步：代入计算
$\\frac{dy}{dx} = \\frac{1}{u} \\cdot (-2) = \\frac{-2}{3-2x}$`,
      answer: "$y' = \\frac{-2}{3-2x}$",
      difficulty: "easy",
      category: "对数求导",
      method: "链式法则"
    },
    {
      id: 32,
      type: "计算题",
      title: "对数函数求导(2)",
      question: "32. 求函数 $y = e^x \\ln x$ 的导数",
      essence: "这道题考查指数函数与对数函数乘积的求导。需要使用乘积法则 $(uv)' = u'v + uv'$，分别对两个函数求导。",
      explanation: `第一步：应用乘积法则
设 $u = e^x$，$v = \\ln x$
则 $y = uv$，$y' = u'v + uv'$

第二步：分别求导
$u' = e^x$
$v' = \\frac{1}{x}$

第三步：代入乘积法则
$y' = e^x \\cdot \\ln x + e^x \\cdot \\frac{1}{x}$

第四步：提取公因子
$y' = e^x\\left(\\ln x + \\frac{1}{x}\\right)$`,
      answer: "$y' = e^x\\left(\\ln x + \\frac{1}{x}\\right)$",
      difficulty: "easy",
      category: "乘积法则",
      method: "乘积求导"
    },
 
    {
      id: 34,
      type: "计算题",
      title: "反三角函数求导",
      question: "34. 求函数 $y = \\arcsin\\sqrt{1-4x^2}$ 的导数",
      essence: "这道题考查反三角函数的复合函数求导。需要使用链式法则，先对外层反三角函数求导，再对内层根式函数求导。注意定义域的限制。",
      explanation: `第一步：设中间变量
设 $u = \\sqrt{1-4x^2}$，则 $y = \\arcsin u$

第二步：求 $\\frac{du}{dx}$
$u = (1-4x^2)^{1/2}$
$\\frac{du}{dx} = \\frac{1}{2}(1-4x^2)^{-1/2} \\cdot (-8x) = \\frac{-4x}{\\sqrt{1-4x^2}}$

第三步：求 $\\frac{dy}{du}$
$\\frac{dy}{du} = \\frac{1}{\\sqrt{1-u^2}}$

第四步：计算 $1-u^2$
$1-u^2 = 1-(1-4x^2) = 4x^2$

第五步：应用链式法则
当 $x > 0$ 时：
$y' = \\frac{1}{\\sqrt{4x^2}} \\cdot \\frac{-4x}{\\sqrt{1-4x^2}} = \\frac{1}{2x} \\cdot \\frac{-4x}{\\sqrt{1-4x^2}} = \\frac{-2}{\\sqrt{1-4x^2}}$`,
      answer: "$y' = \\frac{-2}{\\sqrt{1-4x^2}}$ （当$x > 0$）",
      difficulty: "hard",
      category: "反三角函数",
      method: "链式法则"
    },
    
    {
      id: 36,
      type: "计算题",
      title: "参数方程求导",
      question: "36. 设 $\\begin{cases} x = e^t \\sin t \\\\ y = e^t \\cos t \\end{cases}$，求 $\\frac{dy}{dx}$",
      essence: "这道题考查参数方程的求导。需要使用参数方程求导公式 $\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$，先分别对 $x(t)$ 和 $y(t)$ 求导，然后计算比值。",
      explanation: `第一步：求 $\\frac{dx}{dt}$
应用乘积法则：
$\\frac{dx}{dt} = e^t\\sin t + e^t\\cos t = e^t(\\sin t + \\cos t)$

第二步：求 $\\frac{dy}{dt}$
$\\frac{dy}{dt} = e^t\\cos t - e^t\\sin t = e^t(\\cos t - \\sin t)$

第三步：求 $\\frac{dy}{dx}$
$\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{e^t(\\cos t - \\sin t)}{e^t(\\sin t + \\cos t)}$

第四步：化简
$\\frac{dy}{dx} = \\frac{\\cos t - \\sin t}{\\sin t + \\cos t}$`,
      answer: "$\\frac{dy}{dx} = \\frac{\\cos t - \\sin t}{\\sin t + \\cos t}$",
      difficulty: "medium",
      category: "参数方程",
      method: "参数方程求导"
    },
    {
      id: 37,
      type: "计算题",
      title: "微分计算",
      question: "37. 设函数 $y = x^4\\sin x$，求 $dy$",
      essence: "这道题考查函数的微分计算。需要先使用乘积法则求导数，然后写出微分形式 $dy = y'dx$。注意乘积法则的应用和因式分解。",
      explanation: `第一步：求导数
应用乘积法则：
$y' = (x^4)'\\sin x + x^4(\\sin x)'$

第二步：计算各部分
$(x^4)' = 4x^3$
$(\\sin x)' = \\cos x$

第三步：代入
$y' = 4x^3\\sin x + x^4\\cos x$

第四步：提取公因子
$y' = x^3(4\\sin x + x\\cos x)$

第五步：写出微分
$dy = y'dx = x^3(4\\sin x + x\\cos x)dx$`,
      answer: "$dy = x^3(4\\sin x + x\\cos x)dx$",
      difficulty: "easy",
      category: "微分",
      method: "微分公式"
    },
    {
      id: 38,
      type: "计算题",
      title: "公切线问题",
      question: "38. 已知曲线 $y = ax^2$ 与 $y = \\ln x$ 相切，确定 $a$ 的值",
      essence: "这道题考查两条曲线的公切线问题。需要利用两曲线相切的条件：在切点处函数值相等且切线斜率相等，建立方程组求解参数。",
      explanation: `第一步：设切点坐标
设两曲线在点 $(x_0, y_0)$ 处相切

第二步：建立方程组
在切点处，两曲线：
- 函数值相等：$ax_0^2 = \\ln x_0$ ... (1)
- 切线斜率相等

第三步：求导数
对 $y = ax^2$：$y' = 2ax$
对 $y = \\ln x$：$y' = \\frac{1}{x}$

第四步：斜率相等条件
$2ax_0 = \\frac{1}{x_0}$ ... (2)

第五步：从方程(2)求解
$2ax_0^2 = 1$
$ax_0^2 = \\frac{1}{2}$ ... (3)

第六步：将(3)代入(1)
$\\frac{1}{2} = \\ln x_0$
$x_0 = e^{1/2} = \\sqrt{e}$

第七步：求a的值
将 $x_0 = \\sqrt{e}$ 代入方程(3)：
$a \\cdot e = \\frac{1}{2}$
$a = \\frac{1}{2e}$`,
      answer: "$a = \\frac{1}{2e}$",
      difficulty: "hard",
      category: "切线应用",
      method: "公切线条件"
    },

    // ==================== 复合函数求导练习题补充 ====================
    
    {
      id: 39,
      type: "选择题",
      title: "反三角函数复合",
      question: "39. 函数 $f(x) = \\arcsin(2x)$ 的导数是（）\nA. $\\frac{1}{\\sqrt{1-4x^2}}$ \nB. $\\frac{2}{\\sqrt{1-4x^2}}$ \nC. $\\frac{1}{\\sqrt{1-x^2}}$ \nD. $\\frac{2}{\\sqrt{1-x^2}}$",
      essence: "这道题考查反三角函数的复合函数求导。需要使用链式法则，先对外层反三角函数求导，再对内层线性函数求导。注意复合函数中内层函数导数的系数。",
      explanation: `使用链式法则：设 $u = 2x$，则 $f(x) = \\arcsin u$

第一步：求外层函数导数
$(\\arcsin u)' = \\frac{1}{\\sqrt{1-u^2}}$

第二步：求内层函数导数
$(2x)' = 2$

第三步：应用链式法则
$f'(x) = \\frac{1}{\\sqrt{1-u^2}} \\cdot 2 = \\frac{2}{\\sqrt{1-4x^2}}$`,
      answer: "B",
      difficulty: "medium",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 40,
      type: "选择题",
      title: "反余弦函数复合",
      question: "40. 函数 $f(x) = \\arccos(x^2)$ 的导数是（）\nA. $\\frac{2x}{\\sqrt{1-x^4}}$ \nB. $-\\frac{2x}{\\sqrt{1-x^4}}$ \nC. $\\frac{1}{\\sqrt{1-x^4}}$ \nD. $-\\frac{1}{\\sqrt{1-x^4}}$",
      essence: "这道题考查反余弦函数的复合函数求导。需要使用链式法则，先对外层反余弦函数求导，再对内层幂函数求导。注意反余弦函数导数的负号。",
      explanation: `使用链式法则：设 $u = x^2$，则 $f(x) = \\arccos u$

第一步：求外层函数导数
$(\\arccos u)' = -\\frac{1}{\\sqrt{1-u^2}}$

第二步：求内层函数导数
$(x^2)' = 2x$

第三步：应用链式法则
$f'(x) = -\\frac{1}{\\sqrt{1-u^2}} \\cdot 2x = -\\frac{2x}{\\sqrt{1-x^4}}$`,
      answer: "B",
      difficulty: "medium",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 41,
      type: "填空题",
      title: "反正切函数复合",
      question: "41. 函数 $f(x) = \\arctan(3x)$ 的导数是 ______",
      essence: "这道题考查反正切函数的复合函数求导。需要使用链式法则，先对外层反正切函数求导，再对内层线性函数求导。",
      explanation: `使用链式法则：设 $u = 3x$，则 $f(x) = \\arctan u$

第一步：$(\\arctan u)' = \\frac{1}{1+u^2}$
第二步：$(3x)' = 3$
第三步：$f'(x) = \\frac{1}{1+u^2} \\cdot 3 = \\frac{3}{1+9x^2}$`,
      answer: "$\\frac{3}{1+9x^2}$",
      difficulty: "easy",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 42,
      type: "选择题",
      title: "双曲函数复合",
      question: "42. 函数 $f(x) = \\sinh(2x+1)$ 的导数是（）\nA. $\\cos(2x+1)$ \nB. $2\\cos(2x+1)$ \nC. $\\sin(2x+1)$ \nD. $2\\sin(2x+1)$",
      essence: "这道题考查双曲函数的复合函数求导。需要使用链式法则，先对外层双曲正弦函数求导，再对内层线性函数求导。注意双曲函数的导数公式。",
      explanation: `使用链式法则：设 $u = 2x+1$，则 $f(x) = \\sin u$

第一步：求外层函数导数
$(\\sin u)' = \\cos u$

第二步：求内层函数导数
$(2x+1)' = 2$

第三步：应用链式法则
$f'(x) = \\cos u \\cdot 2 = 2\\cos(2x+1)$`,
      answer: "B",
      difficulty: "medium",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 43,
      type: "填空题",
      title: "余弦函数复合",
      question: "43. 函数 $f(x) = \\cos(x^2)$ 的导数是 ______",
      essence: "这道题考查余弦函数的复合函数求导。需要使用链式法则，先对外层余弦函数求导，再对内层幂函数求导。注意余弦函数导数的负号。",
      explanation: `使用链式法则：设 $u = x^2$，则 $f(x) = \\cos u$

第一步：$(\\cos u)' = -\\sin u$
第二步：$(x^2)' = 2x$
第三步：$f'(x) = -\\sin u \\cdot 2x = -2x\\sin(x^2)$`,
      answer: "$-2x\\sin(x^2)$",
      difficulty: "medium",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 44,
      type: "选择题",
      title: "幂指函数复合",
      question: "44. 函数 $f(x) = (x+1)^{x+2}$ 的导数是（）\nA. $(x+2)(x+1)^{x+1}$ \nB. $(x+1)^{x+2}[\\ln(x+1) + \\frac{x+2}{x+1}]$ \nC. $(x+1)^{x+1}$ \nD. $(x+2)\\ln(x+1)(x+1)^{x+2}$",
      essence: "这道题考查幂指函数的求导。对于形如 $f(x)^{g(x)}$ 的幂指函数，需要使用对数求导法：先取对数，再对两边求导，最后解出 $y'$。",
      explanation: `对于幂指函数，需要先取对数再求导：

设 $y = (x+1)^{x+2}$，取对数得：
$\\ln y = (x+2)\\ln(x+1)$

两边对 $x$ 求导：
$\\frac{y'}{y} = \\ln(x+1) + (x+2) \\cdot \\frac{1}{x+1} = \\ln(x+1) + \\frac{x+2}{x+1}$

因此：$y' = y[\\ln(x+1) + \\frac{x+2}{x+1}] = (x+1)^{x+2}[\\ln(x+1) + \\frac{x+2}{x+1}]$`,
      answer: "B",
      difficulty: "hard",
      category: "复合函数求导",
      method: "对数求导法"
    },

    {
      id: 45,
      type: "填空题",
      title: "指数幂复合",
      question: "45. 函数 $f(x) = x^{\\sin x}$ 的导数是 ______",
      essence: "这道题考查幂指函数的求导。对于形如 $x^{g(x)}$ 的幂指函数，需要使用对数求导法：先取对数，再对两边求导，最后解出 $y'$。",
      explanation: `对于幂指函数，使用对数求导法：

设 $y = x^{\\sin x}$，取对数得：
$\\ln y = \\sin x \\cdot \\ln x$

两边对 $x$ 求导：
$\\frac{y'}{y} = \\cos x \\cdot \\ln x + \\sin x \\cdot \\frac{1}{x}$

因此：$y' = y[\\cos x \\ln x + \\frac{\\sin x}{x}] = x^{\\sin x}[\\cos x \\ln x + \\frac{\\sin x}{x}]$`,
      answer: "$x^{\\sin x}[\\cos x \\ln x + \\frac{\\sin x}{x}]$",
      difficulty: "hard",
      category: "复合函数求导",
      method: "对数求导法"
    },

    {
      id: 46,
      type: "选择题",
      title: "四层复合函数",
      question: "46. 函数 $f(x) = \\sin(\\cos(\\sin x))$ 的导数是（）\nA. $\\cos(\\cos(\\sin x)) \\cdot \\sin(\\sin x) \\cdot \\cos x$ \nB. $-\\cos(\\cos(\\sin x)) \\cdot \\sin(\\sin x) \\cdot \\cos x$ \nC. $\\cos(\\cos(\\sin x)) \\cdot \\cos(\\sin x) \\cdot \\cos x$ \nD. $-\\cos(\\cos(\\sin x)) \\cdot \\cos(\\sin x) \\cdot \\cos x$",
      essence: "这道题考查多层复合函数的求导。需要多次应用链式法则，从外到内逐层求导。注意每层函数的导数符号和复合关系。",
      explanation: `需要多次应用链式法则：

设 $u = \\cos(\\sin x)$，则 $f(x) = \\sin u$
$f'(x) = \\cos u \\cdot u'$

其中 $u = \\cos(\\sin x)$，设 $v = \\sin x$，则 $u = \\cos v$
$u' = -\\sin v \\cdot v' = -\\sin(\\sin x) \\cdot \\cos x$

因此：$f'(x) = \\cos(\\cos(\\sin x)) \\cdot [-\\sin(\\sin x) \\cdot \\cos x] = -\\cos(\\cos(\\sin x)) \\cdot \\sin(\\sin x) \\cdot \\cos x$`,
      answer: "B",
      difficulty: "hard",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 47,
      type: "填空题",
      title: "根式三角复合",
      question: "47. 函数 $f(x) = \\sqrt{\\sin(2x)}$ 的导数是 ______",
      essence: "这道题考查根式与三角函数的复合函数求导。需要将根式表示为幂函数形式，然后使用链式法则逐层求导。注意定义域的限制。",
      explanation: `$\\sqrt{\\sin(2x)} = [\\sin(2x)]^{1/2}$，使用链式法则：

第一步：设 $u = \\sin(2x)$，则 $f(x) = u^{1/2}$
$(u^{1/2})' = \\frac{1}{2}u^{-1/2} = \\frac{1}{2\\sqrt{u}}$

第二步：设 $v = 2x$，则 $u = \\sin v$
$u' = \\cos v \\cdot v' = \\cos(2x) \\cdot 2 = 2\\cos(2x)$

第三步：$f'(x) = \\frac{1}{2\\sqrt{u}} \\cdot u' = \\frac{1}{2\\sqrt{\\sin(2x)}} \\cdot 2\\cos(2x) = \\frac{\\cos(2x)}{\\sqrt{\\sin(2x)}}$`,
      answer: "$\\frac{\\cos(2x)}{\\sqrt{\\sin(2x)}}$",
      difficulty: "hard",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 48,
      type: "选择题",
      title: "对数指数三角复合",
      question: "48. 函数 $f(x) = \\ln(\\sin(e^x))$ 的导数是（）\nA. $\\frac{e^x \\cos(e^x)}{\\sin(e^x)}$ \nB. $\\frac{\\cos(e^x)}{\\sin(e^x)}$ \nC. $\\frac{e^x}{\\sin(e^x)}$ \nD. $\\frac{\\cos(e^x)}{e^x \\sin(e^x)}$",
      essence: "这道题考查对数、指数、三角函数的三层复合函数求导。需要多次应用链式法则，从外到内逐层求导。注意每层函数的导数公式。",
      explanation: `使用链式法则：设 $u = \\sin(e^x)$，则 $f(x) = \\ln u$

第一步：$(\\ln u)' = \\frac{1}{u}$

第二步：设 $v = e^x$，则 $u = \\sin v$
$u' = \\cos v \\cdot v' = \\cos(e^x) \\cdot e^x = e^x \\cos(e^x)$

第三步：$f'(x) = \\frac{1}{u} \\cdot u' = \\frac{1}{\\sin(e^x)} \\cdot e^x \\cos(e^x) = \\frac{e^x \\cos(e^x)}{\\sin(e^x)}$`,
      answer: "A",
      difficulty: "hard",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 49,
      type: "填空题",
      title: "反函数复合",
      question: "49. 函数 $f(x) = \\arcsin(\\sqrt{x})$ 的导数是 ______",
      essence: "这道题考查反三角函数与根式函数的复合函数求导。需要使用链式法则，先对外层反三角函数求导，再对内层根式函数求导。注意定义域的限制。",
      explanation: `使用链式法则：设 $u = \\sqrt{x} = x^{1/2}$，则 $f(x) = \\arcsin u$

第一步：$(\\arcsin u)' = \\frac{1}{\\sqrt{1-u^2}} = \\frac{1}{\\sqrt{1-x}}$

第二步：$(x^{1/2})' = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$

第三步：$f'(x) = \\frac{1}{\\sqrt{1-x}} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{1}{2\\sqrt{x}\\sqrt{1-x}}$`,
      answer: "$\\frac{1}{2\\sqrt{x}\\sqrt{1-x}}$",
      difficulty: "hard",
      category: "复合函数求导",
      method: "链式法则"
    },

    {
      id: 50,
      type: "选择题",
      title: "复杂幂指函数",
      question: "50. 函数 $f(x) = (\\sin x)^{\\cos x}$ 的导数是（）\nA. $(\\sin x)^{\\cos x}[\\cos x \\cot x - \\sin x \\ln(\\sin x)]$ \nB. $(\\sin x)^{\\cos x}[\\cos x \\cot x + \\sin x \\ln(\\sin x)]$ \nC. $(\\sin x)^{\\cos x}[-\\cos x \\cot x - \\sin x \\ln(\\sin x)]$ \nD. $(\\sin x)^{\\cos x}[-\\cos x \\cot x + \\sin x \\ln(\\sin x)]$",
      essence: "这道题考查复杂的幂指函数求导。对于形如 $f(x)^{g(x)}$ 的幂指函数，需要使用对数求导法：先取对数，再对两边求导，最后解出 $y'$。注意三角函数和对数函数的导数。",
      explanation: `使用对数求导法：

设 $y = (\\sin x)^{\\cos x}$，取对数得：
$\\ln y = \\cos x \\cdot \\ln(\\sin x)$

两边对 $x$ 求导：
$\\frac{y'}{y} = -\\sin x \\cdot \\ln(\\sin x) + \\cos x \\cdot \\frac{\\cos x}{\\sin x}$
$= -\\sin x \\ln(\\sin x) + \\cos x \\cot x$

因此：$y' = y[-\\sin x \\ln(\\sin x) + \\cos x \\cot x] = (\\sin x)^{\\cos x}[-\\sin x \\ln(\\sin x) + \\cos x \\cot x]$`,
      answer: "D",
      difficulty: "hard",
      category: "复合函数求导",
      method: "对数求导法"
    }
  ];
