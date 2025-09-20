window.exerciseData = {
  // 知识点
  knowledgePoints: [
    {
      title: "极限概念和定理",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>极限的直观理解</strong>：当$x$越来越接近某个值时，函数$f(x)$趋向于一个固定的数值，这个数值就是极限。</li>
            <li style="margin-bottom: 10px;"><strong>函数极限</strong>：记作 $\\lim\\limits_{x \\to x_0} f(x) = A$，表示当$x$接近$x_0$时，$f(x)$接近$A$。</li>
            <li style="margin-bottom: 10px;"><strong>左右极限</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">左极限：$\\lim\\limits_{x \\to x_0^-} f(x)$，从左边接近某点的极限</li>
                <li style="margin-bottom: 5px;">右极限：$\\lim\\limits_{x \\to x_0^+} f(x)$，从右边接近某点的极限</li>
                <li style="margin-bottom: 5px;">极限存在条件：$\\lim\\limits_{x \\to x_0} f(x)$存在 $\\Leftrightarrow$ 左极限等于右极限</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>极限的趋向类型</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$x \\to x_0$：$x$趋向于定点$x_0$</li>
                <li style="margin-bottom: 5px;">$x \\to x_0^+$：$x$从右边趋向于$x_0$</li>
                <li style="margin-bottom: 5px;">$x \\to x_0^-$：$x$从左边趋向于$x_0$</li>
                <li style="margin-bottom: 5px;">$x \\to +\\infty$：$x$趋向于正无穷</li>
                <li style="margin-bottom: 5px;">$x \\to -\\infty$：$x$趋向于负无穷</li>
                <li style="margin-bottom: 5px;">$x \\to \\infty$：$x$趋向于无穷（正负无穷）</li>
              </ul>
            </li>
           
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "极限基础运算",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>直接代入法</strong>：当函数在$x_0$处连续时，直接代入$x_0$计算</li>
            <li style="margin-bottom: 10px;"><strong>因式分解法</strong>：处理"0/0"型极限，先因式分解再约分
              <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px;">
                例：$\\lim\\limits_{x \\to 2} \\frac{x^2-4}{x-2} = \\lim\\limits_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim\\limits_{x \\to 2} (x+2) = 4$
              </div>
            </li>
            <li style="margin-bottom: 10px;"><strong>有理化法</strong>：处理含根号的"0/0"型极限
              <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px;">
                例：$\\lim\\limits_{x \\to 0} \\frac{\\sqrt{x+1}-1}{x}$，分子分母同乘以$(\\sqrt{x+1}+1)$
              </div>
            </li>
            <li style="margin-bottom: 10px;"><strong>极限的四则运算</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">加减法：$\\lim [f(x) ± g(x)] = \\lim f(x) ± \\lim g(x)$</li>
                <li style="margin-bottom: 5px;">乘法：$\\lim [f(x) \\cdot g(x)] = \\lim f(x) \\cdot \\lim g(x)$</li>
                <li style="margin-bottom: 5px;">除法：$\\lim \\frac{f(x)}{g(x)} = \\frac{\\lim f(x)}{\\lim g(x)}$（分母不为0）</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>复合函数极限</strong>：$\\lim\\limits_{x \\to x_0} f(g(x)) = f(\\lim\\limits_{x \\to x_0} g(x))$（当$f$在$\\lim g(x)$处连续时）</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "两个重要极限",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>第一个重要极限</strong>：
              <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px; text-align: center;">
                $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = 1$
              </div>
              这是三角函数中最重要的极限，常用来计算包含$\\sin x$的极限
            </li>
            <li style="margin-bottom: 10px;"><strong>第二个重要极限</strong>：
              <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px; text-align: center;">
                $\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$
              </div>
              这个极限定义了自然常数$e$，在指数函数中很重要
            </li>
            <li style="margin-bottom: 10px;"><strong>重要极限的变形</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$\\lim\\limits_{x \\to 0} \\frac{\\sin(ax)}{bx} = \\frac{a}{b}$</li>
                <li style="margin-bottom: 5px;">$\\lim\\limits_{x \\to 0} \\frac{\\tan x}{x} = 1$</li>
                <li style="margin-bottom: 5px;">$\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{a}{x}\\right)^x = e^a$</li>
                <li style="margin-bottom: 5px;">$\\lim\\limits_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>使用技巧</strong>：在计算极限时，需要凑成重要极限的标准形式，然后应用公式。</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "等价无穷小",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>无穷小与无穷大</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">无穷小：极限值为0的函数，如$\\lim\\limits_{x \\to 0} x = 0$</li>
                <li style="margin-bottom: 5px;">无穷大：极限值为无穷大的函数，如$\\lim\\limits_{x \\to 0} \\frac{1}{x} = \\infty$</li>
                <li style="margin-bottom: 5px;">互为倒数：若$\\lim\\limits_{x \\to x_0} f(x) = 0$，则$\\lim\\limits_{x \\to x_0} \\frac{1}{f(x)} = \\infty$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>等价无穷小</strong>（当 $x \\to 0$ 时）：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">三角函数：$\\sin x \\sim x$，$\\tan x \\sim x$</li>
                <li style="margin-bottom: 5px;">余弦函数：$1 - \\cos x \\sim \\frac{x^2}{2}$</li>
                <li style="margin-bottom: 5px;">指数对数：$e^x - 1 \\sim x$，$\\ln(1+x) \\sim x$</li>
                <li style="margin-bottom: 5px;">幂函数：$(1+x)^a - 1 \\sim ax$</li>
                <li style="margin-bottom: 5px;">反三角函数：$\\arcsin x \\sim x$，$\\arctan x \\sim x$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>无穷小的比较</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">高阶无穷小：$\\lim \\frac{\\beta(x)}{\\alpha(x)} = 0$，记作$\\beta(x) = o(\\alpha(x))$</li>
                <li style="margin-bottom: 5px;">同阶无穷小：$\\lim \\frac{\\beta(x)}{\\alpha(x)} = c \\neq 0$</li>
                <li style="margin-bottom: 5px;">等价无穷小：$\\lim \\frac{\\beta(x)}{\\alpha(x)} = 1$，记作$\\alpha(x) \\sim \\beta(x)$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>使用技巧</strong>：在计算极限时，可以将复杂的函数替换为等价的简单函数，从而简化计算过程。</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "连续性与间断点",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #af7aa1; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>连续性的定义</strong>：函数$f(x)$在$x_0$处连续，当且仅当$\\lim\\limits_{x \\to x_0} f(x) = f(x_0)$</li>
            <li style="margin-bottom: 10px;"><strong>判断连续性的步骤</strong>：
              <ol style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">计算函数值：$f(x_0)$</li>
                <li style="margin-bottom: 5px;">计算极限：$\\lim\\limits_{x \\to x_0} f(x)$</li>
                <li style="margin-bottom: 5px;">比较：极限值 = 函数值，则连续</li>
              </ol>
            </li>
            <li style="margin-bottom: 10px;"><strong>间断点的类型</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">可去间断点：极限存在但函数值无定义或不等</li>
                <li style="margin-bottom: 5px;">跳跃间断点：左右极限存在但不相等</li>
                <li style="margin-bottom: 5px;">无穷间断点：极限为无穷大</li>
                <li style="margin-bottom: 5px;">振荡间断点：极限不存在且不趋于无穷</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>分段函数的连续性</strong>：在分段点处需要分别计算左极限和右极限
              <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px;">
                例：$f(x) = \\begin{cases} 2x+k, & x \\le 1 \\\\ 4x-1, & x > 1 \\end{cases}$在$x=1$处连续，求$k$
              </div>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "初等函数连续性",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #76b7b2; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>基本初等函数的连续性</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">多项式函数：在定义域内连续</li>
                <li style="margin-bottom: 5px;">有理函数：在分母不为0的点连续</li>
                <li style="margin-bottom: 5px;">三角函数：$\\sin x$、$\\cos x$在$\\mathbb{R}$上连续</li>
                <li style="margin-bottom: 5px;">指数函数：$a^x$在$\\mathbb{R}$上连续</li>
                <li style="margin-bottom: 5px;">对数函数：$\\log_a x$在$(0,+\\infty)$上连续</li>
                <li style="margin-bottom: 5px;">幂函数：$x^a$在定义域内连续</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>连续函数的运算性质</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">连续函数的和、差、积、商（分母不为0）仍连续</li>
                <li style="margin-bottom: 5px;">连续函数的复合函数仍连续</li>
                <li style="margin-bottom: 5px;">反函数的连续性：若$f$在$I$上连续且严格单调，则$f^{-1}$在$f(I)$上连续</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>闭区间上连续函数的性质</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">有界性：闭区间上的连续函数必有界</li>
                <li style="margin-bottom: 5px;">最值定理：闭区间上的连续函数必能取到最大值和最小值</li>
                <li style="margin-bottom: 5px;">零点定理：若$f(a) \\cdot f(b) < 0$，则存在$c \\in (a,b)$使$f(c) = 0$</li>
                <li style="margin-bottom: 5px;">介值定理：若$f$在$[a,b]$上连续，则$f$能取到$[f(a),f(b)]$内的所有值</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    }
  ]
};

window.exerciseData.exercises = [
  // 极限章节题目
  // 选择题 - 极限部分
  {
    id: 1,
    type: "选择题",
    title: "极限计算",
    question: "下列等式正确的是（ ）\nA. $\\lim\\limits_{x\\to 0}x\\sin\\frac{1}{x} = 1$ \nB. $\\lim\\limits_{x\\to 0}\\frac{x^2-1}{x^2-3x-1} = 1$ \nC. $\\lim\\limits_{x\\to 0}\\left(1+\\frac{1}{x}\\right)^x = e$ \nD. $\\lim\\limits_{x\\to 0}e^{\\frac{1}{x}} = 0$",
    essence: "这道题考查极限的基本性质和计算方法。需要逐一分析每个选项的极限值，判断哪个等式成立。关键要掌握：无穷小×有界函数=无穷小、连续性、重要极限的适用条件等知识点。",
    explanation: `<strong>选项A分析：</strong>
$$\\lim\\limits_{x\\to 0}x\\sin\\frac{1}{x}$$
利用"无穷小×有界函数=无穷小"：
$$\\lim\\limits_{x\\to 0}x\\sin\\frac{1}{x} = 0 \\neq 1$$

<strong>选项B分析：</strong>
利用连续性：
$$\\lim\\limits_{x\\to 0}\\frac{x^2-1}{x^2-3x-1} = \\frac{0-1}{0-0-1} = \\frac{-1}{-1} = 1$$
选项B正确

<strong>选项C分析：</strong>
$$\\lim\\limits_{x\\to 0^+}\\left(1+\\frac{1}{x}\\right)^x = e^0 = 1$$
$$\\lim\\limits_{x\\to 0^-}\\left(1+\\frac{1}{x}\\right)^x\\text{不存在}$$
极限不存在

<strong>选项D分析：</strong>
$$\\lim\\limits_{x\\to 0^+}e^{\\frac{1}{x}} = +\\infty$$
$$\\lim\\limits_{x\\to 0^-}e^{\\frac{1}{x}} = 0$$
极限不存在`,
    answer: "B",
    difficulty: "medium",
    category: "极限概念和定理",
    method: "极限性质判断"
  },
  {
    id: 2,
    type: "概念理解题",
    title: "判断极限存在",
    question: "已知分段函数 $f(x) = \\begin{cases} x^2 + 1, & x \\le 2 \\\\ 3x - 1, & x > 2 \\end{cases}$。\n请问 $\\lim\\limits_{x \\to 2} f(x)$ 是否存在？如果存在，求出其值。",
    essence: "这道题考查分段函数极限存在性的判断。核心是理解极限存在的充要条件：左极限等于右极限。对于分段函数，需要分别计算分段点处的左极限和右极限，然后比较是否相等。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：计算左极限</strong>
当 $x \\to 2^-$ 时，使用 $x^2 + 1$：
$$\\lim\\limits_{x \\to 2^-} f(x) = \\lim\\limits_{x \\to 2^-} (x^2 + 1) = 2^2 + 1 = 5$$

<strong>第二步：计算右极限</strong>
当 $x \\to 2^+$ 时，使用 $3x - 1$：
$$\\lim\\limits_{x \\to 2^+} f(x) = \\lim\\limits_{x \\to 2^+} (3x - 1) = 3(2) - 1 = 5$$

<strong>第三步：判断极限存在性</strong>
因为左极限 = 右极限 = 5，所以极限存在
$$\\lim\\limits_{x \\to 2} f(x) = 5$$`,
    answer: "存在，极限为 5",
    difficulty: "easy",
    category: "极限概念和定理",
    method: "左右极限相等"
  },
  {
    id: 3,
    type: "基础计算题",
    title: "直接代入法",
    question: "计算 $\\lim\\limits_{x \\to -1} \\frac{x^2 - 2x}{x+3}$",
    essence: "这道题考查直接代入法计算极限。当函数在目标点处连续时，可以直接将x值代入函数计算。需要先判断函数在该点是否连续（分母不为0），然后直接代入计算。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：检查函数连续性</strong>
函数 $f(x) = \\frac{x^2 - 2x}{x+3}$ 在 $x = -1$ 处连续（分母不为0）

<strong>第二步：直接代入</strong>
$$\\lim\\limits_{x \\to -1} \\frac{x^2 - 2x}{x+3} = \\frac{(-1)^2 - 2(-1)}{-1+3} = \\frac{1+2}{2} = \\frac{3}{2}$$`,
    answer: "$\\frac{3}{2}$",
    difficulty: "easy",
    category: "极限基础运算",
    method: "直接代入法"
  },
  {
    id: 4,
    type: "基础计算题",
    title: "因式分解法",
    question: "计算 $\\lim\\limits_{x \\to 2} \\frac{x^2 - 4}{x - 2}$",
    essence: "本题考查因式分解法处理 $\\dfrac{0}{0}$ 型极限。直接代入 $x=2$ 得 $\\dfrac{0}{0}$，需将 $x^2-4$ 因式分解为 $(x-2)(x+2)$，与分母约去 $(x-2)$ 后，再代入计算极限。这是有理函数极限的常用方法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：检查极限类型</strong>
直接代入得到 $\\frac{0}{0}$ 型，需要使用因式分解法

<strong>第二步：因式分解</strong>
$$\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2}$$

<strong>第三步：约分</strong>
当 $x \\neq 2$ 时，可以约去 $(x-2)$：
$$= x + 2$$

<strong>第四步：计算极限</strong>
$$\\lim\\limits_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim\\limits_{x \\to 2} (x + 2) = 2 + 2 = 4$$`,
    answer: "4",
    difficulty: "easy",
    category: "极限基础运算",
    method: "因式分解法"
  },
  {
    id: 5,
    type: "选择题",
    title: "间断点类型",
    question: "设$f(x) = \\begin{cases}\\frac{\\tan x}{x}, & x \\neq 0 \\\\ e^x, & x = 0\\end{cases}$，则$x = 0$是$f(x)$的（ ）\nA. 连续点 B. 可去间断点 C. 跳跃间断点 D. 无穷间断点",
    essence: "这道题考查间断点类型的判断。需要计算函数在分段点处的左极限、右极限和函数值，然后根据连续性定义判断是连续点还是间断点，以及间断点的具体类型。",
    explanation: `<strong>第一步：计算左极限</strong>
$$\\lim\limits_{x\\to 0^-}f(x) = \\lim\limits_{x\\to 0^-}\\frac{\\tan x}{x} = 1$$

<strong>第二步：计算右极限</strong>
$$\\lim\limits_{x\\to 0^+}f(x) = \\lim\limits_{x\\to 0^+}\\frac{\\tan x}{x} = 1$$

<strong>第三步：计算函数值</strong>
$$f(0) = e^0 = 1$$

<strong>第四步：判断连续性</strong>
$$\\lim\limits_{x\\to 0^-}f(x) = \\lim\limits_{x\\to 0^+}f(x) = f(0) = 1$$
所以$x = 0$是$f(x)$的连续点`,
    answer: "A",
    difficulty: "medium",
    category: "连续性与间断点",
    method: "连续性判断"
  },
  {
    id: 6,
    type: "选择题",
    title: "重要极限",
    question: "$\\lim\\limits_{x\\to 0}(1-2x)^{\\frac{1}{x}} = $（ ）\nA. $e^2$ B. $e^{-2}$ C. $-e^{-2}$ D. $-e^2$",
    essence: "这道题考查第二重要极限的应用。需要将题目中的形式凑成标准形式$(1+t)^{\\frac{1}{t}}$，然后应用极限值等于$e$的结论。关键是要会进行适当的换元变换。",
    explanation: `<strong>使用重要极限：</strong>
$$\\lim\\limits_{x\\to 0}(1-2x)^{\\frac{1}{x}}$$

<strong>改写形式：</strong>
$$= \\lim\\limits_{x\\to 0}[(1-2x)^{\\frac{1}{-2x}}]^{-2}$$

<strong>应用极限：</strong>
$$= [\\lim\\limits_{t\\to 0}(1+t)^{\\frac{1}{t}}]^{-2} = e^{-2}$$`,
    answer: "B",
    difficulty: "medium",
    category: "两个重要极限",
    method: "指数极限"
  },
  {
    id: 7,
    type: "选择题",
    title: "间断点类型",
    question: "$x = 1$为函数$f(x) = \\frac{x^3-1}{x-1}$（ ）\nA. 连续点 B. 跳跃间断点 C. 可去间断点 D. 第二类间断点",
    essence: "这道题考查可去间断点的识别。当函数在某点无定义但极限存在时，该点就是可去间断点。需要先化简函数，计算极限，然后判断间断点类型。",
    explanation: `<strong>第一步：化简函数</strong>
$$f(x) = \\frac{x^3-1}{x-1} = \\frac{(x-1)(x^2+x+1)}{x-1}$$
当$x \\neq 1$时，$f(x) = x^2+x+1$

<strong>第二步：计算极限</strong>
$$\\lim\limits_{x\\to 1}f(x) = \\lim\limits_{x\\to 1}(x^2+x+1) = 3$$

<strong>第三步：判断间断点类型</strong>
极限存在但函数在该点无定义，所以$x = 1$是可去间断点`,
    answer: "C",
    difficulty: "easy",
    category: "连续性与间断点",
    method: "间断点分类"
  },

  // 填空题部分
  {
    id: 8,
    type: "填空题",
    title: "分段函数极限",
    question: "已知函数$f(x) = \\begin{cases}\\frac{1}{x}(e^x-1), & x > 0 \\\\ x+d, & x \\leq 0\\end{cases}$在点$x = 0$处极限存在，则$d = $_______",
    essence: "这道题考查分段函数极限存在时参数的求解。根据极限存在的充要条件，需要使左极限等于右极限，从而建立关于参数d的方程并求解。",
    explanation: `<strong>第一步：计算右极限</strong>
$$\\lim\limits_{x\\to 0^+}f(x) = \\lim\limits_{x\\to 0^+}\\frac{e^x-1}{x} = 1$$

<strong>第二步：计算左极限</strong>
$$\\lim\limits_{x\\to 0^-}f(x) = \\lim\limits_{x\\to 0^-}(x+d) = d$$

<strong>第三步：极限存在的条件</strong>
$$\\lim\limits_{x\\to 0^-}f(x) = \\lim\limits_{x\\to 0^+}f(x)$$
$$d = 1$$`,
    answer: "$1$",
    difficulty: "medium",
    category: "极限基础运算",
    method: "左右极限相等"
  },
  {
    id: 9,
    type: "填空题",
    title: "极限计算",
    question: "极限$\\lim\\limits_{x\\to 0^+}\\frac{2^x}{3+\\ln(1+x)} = $_________",
    essence: "这道题考查利用连续性直接计算极限。当函数在目标点处连续时，可以直接代入计算。需要判断分子分母在x=0处的连续性。",
    explanation: `<strong>利用连续性计算：</strong>
$$\\lim\limits_{x\\to 0^+}\\frac{2^x}{3+\\ln(1+x)} = \\frac{2^0}{3+\\ln(1+0)} = \\frac{1}{3+0} = \\frac{1}{3}$$`,
    answer: "$\\frac{1}{3}$",
    difficulty: "easy",
    category: "极限基础运算",
    method: "连续性"
  },
  {
    id: 10,
    type: "填空题",
    title: "极限计算",
    question: "极限$\\lim\\limits_{x\\to 1}\\frac{x^2+2x+3}{2x^2+3x-1} = $_________",
    essence: "这道题考查有理函数极限的直接代入法。当有理函数在目标点处连续（分母不为0）时，可以直接代入计算极限值。",
    explanation: `<strong>代入$x = 1$计算：</strong>
$$\\lim\limits_{x\\to 1}\\frac{x^2+2x+3}{2x^2+3x-1} = \\frac{1+2+3}{2+3-1} = \\frac{6}{4} = \\frac{3}{2}$$`,
    answer: "$\\frac{3}{2}$",
    difficulty: "easy",
    category: "极限基础运算",
    method: "直接代入"
  },
  {
    id: 11,
    type: "填空题",
    title: "等价无穷小",
    question: "若$x\\to 0$时，无穷小量$2x$与$3x^2+mx$等价，则常数$m = $_______",
    essence: "这道题考查等价无穷小的定义和参数求解。两个无穷小等价的条件是它们的比值的极限等于1，利用这个条件可以建立关于参数m的方程。",
    explanation: `<strong>第一步：等价无穷小的条件</strong>
$$\\lim\limits_{x\\to 0}\\frac{2x}{3x^2+mx} = 1$$

<strong>第二步：化简</strong>
$$\\lim\limits_{x\\to 0}\\frac{2x}{x(3x+m)} = \\lim\limits_{x\\to 0}\\frac{2}{3x+m} = \\frac{2}{m}$$

<strong>第三步：求解</strong>
$$\\frac{2}{m} = 1 \\Rightarrow m = 2$$`,
    answer: "$2$",
    difficulty: "medium",
    category: "等价无穷小",
    method: "极限比值法"
  },
  {
    id: 12,
    type: "填空题",
    title: "极限计算",
    question: "极限$\\lim\\limits_{x\\to 0}\\frac{\\sin ax}{x} = -3$，则$a = $_______",
    essence: "本题考查第一重要极限的应用与参数求解。利用公式：$$\\lim\\limits_{x\\to 0}\\frac{\\sin x}{x} = 1$$，则$$\\lim\\limits_{x\\to 0}\\frac{\\sin(ax)}{x} = a$$，由已知极限值可解得参数$a$。",
    explanation: `<strong>利用重要极限：</strong>
$$\\lim\limits_{x\\to 0}\\frac{\\sin ax}{x} = \\lim\limits_{x\\to 0}\\frac{\\sin ax}{ax} \\cdot a = 1 \\cdot a = a$$

<strong>由题意：</strong>
$$a = -3$$`,
    answer: "$-3$",
    difficulty: "easy",
    category: "极限基础运算",
    method: "重要极限"
  },
  {
    id: 13,
    type: "填空题",
    title: "极限计算",
    question: "求极限$\\lim\\limits_{x\\to 0}\\frac{1-\\cos x}{x\\ln(1+x)} = $_______",
    essence: "本题考查等价无穷小替换法计算极限。$1-\cos x \\sim \\dfrac{x^2}{2}$，$\\ln(1+x) \\sim x$，代入后化简极限。适用于$0/0$型极限的计算。",
    explanation: `<strong>第一步：使用等价无穷小</strong>
当$x\\to 0$时：
$$1-\\cos x \\sim \\frac{x^2}{2}$$
$$\\ln(1+x) \\sim x$$

<strong>第二步：代入计算</strong>
$$\\lim\limits_{x\\to 0}\\frac{1-\\cos x}{x\\ln(1+x)} = \\lim\limits_{x\\to 0}\\frac{\\frac{x^2}{2}}{x \\cdot x} = \\frac{1}{2}$$`,
    answer: "$\\frac{1}{2}$",
    difficulty: "medium",
    category: "极限概念和定理",
    method: "等价无穷小"
  },

  {
    id: 14,
    type: "填空题",
    title: "分段函数连续性",
    question: "设$f(x) = \\begin{cases}x^2+a, & x \\leq 0 \\\\ \\frac{\\sin x}{x}, & x > 0\\end{cases}$在$x = 0$处连续，则$a = $_______",
    essence: "这道题考查分段函数连续性的参数求解。根据连续性定义，需要使左极限等于右极限，从而建立关于参数a的方程。需要分别计算分段点处的左右极限。",
    explanation: `<strong>第一步：计算左极限</strong>
$$\\lim\limits_{x\\to 0^-}f(x) = \\lim\limits_{x\\to 0^-}(x^2+a) = a$$

<strong>第二步：计算右极限</strong>
$$\\lim\limits_{x\\to 0^+}f(x) = \\lim\limits_{x\\to 0^+}\\frac{\\sin x}{x} = 1$$

<strong>第三步：连续性条件</strong>
$$a = 1$$`,
    answer: "$1$",
    difficulty: "easy",
    category: "连续性与间断点",
    method: "连续性条件"
  },
  {
    id: 15,
    type: "填空题",
    title: "极限求参数",
    question: "$\\lim\\limits_{x\\to\\infty}\\frac{3x^3-4x+5}{ax^3+5x^2-6} = \\frac{3}{2}$，则$a = $_______",
    essence: "这道题考查有理函数在无穷远处的极限性质。当$x→∞$时，有理函数的极限值等于最高次项系数之比。利用这个性质可以建立关于参数a的方程并求解。",
    explanation: `<strong>最高次项系数比：</strong>
$$\\lim\limits_{x\\to\\infty}\\frac{3x^3-4x+5}{ax^3+5x^2-6} = \\frac{3}{a}$$

<strong>由题意：</strong>
$$\\frac{3}{a} = \\frac{3}{2}$$

<strong>解得：</strong>
$$a = 2$$`,
    answer: "$2$",
    difficulty: "easy",
    category: "极限基础运算",
    method: "系数比较"
  },
  {
    id: 16,
    type: "填空题",
    title: "重要极限",
    question: "函数$f(x) = (1+\\frac{k}{x})^x$，若$\\lim\\limits_{x\\to\\infty}f(x) = e^2$，则$k = $_______",
    essence: "本题考查第二重要极限的推广形式。当 $x \\to \\infty$ 时，$\\left(1+\\frac{k}{x}\\right)^x \\to e^k$。利用该公式可列方程求 $k$。",
    explanation: `<strong>利用重要极限：</strong>
$$\\lim\limits_{x\\to\\infty}(1+\\frac{k}{x})^x = e^k$$

<strong>由题意：</strong>
$$e^k = e^2$$

<strong>解得：</strong>
$$k = 2$$`,
    answer: "$2$",
    difficulty: "easy",
    category: "两个重要极限",
    method: "指数极限"
  },
 


  // 计算题部分
  {
    id: 17,
    type: "计算题",
    title: "极限计算",
    question: "求极限$\\lim\\limits_{x\\to 0}\\frac{\\sin 4x}{3+\\sqrt{9-3x}}$",
    essence: "这道题考查等价无穷小替换法计算极限。需要将 $\\sin 4x$ 替换为 $4x$，然后计算分母的极限值，最后化简得到结果。这是处理含三角函数极限的常用方法。",
    explanation: `<strong>第一步：使用等价无穷小</strong>
当$x\\to 0$时，$\\sin 4x \\sim 4x$

<strong>第二步：计算分母的极限</strong>
$$\\lim\limits_{x\\to 0}(3+\\sqrt{9-3x}) = 3+\\sqrt{9} = 3+3 = 6$$

<strong>第三步：计算极限</strong>
$$\\lim\limits_{x\\to 0}\\frac{\\sin 4x}{3+\\sqrt{9-3x}} = \\lim\limits_{x\\to 0}\\frac{4x}{6} = 0$$`,
    answer: "$0$",
    difficulty: "medium",
    category: "极限基础运算",
    method: "等价无穷小"
  },
 



  {
    id: 18,
    type: "解答题",
    title: "极限计算",
    question: "求极限$\\lim\\limits_{x\\to 1}\\left(\\frac{2}{1-x^2}-\\frac{1}{1-x}\\right)$",
    essence: "这道题考查通分法处理 $\\infty-\\infty$ 型极限。当直接代入得到 $\\infty-\\infty$ 型时，需要先通分化为分式形式，然后化简约分，最后计算极限。这是处理有理函数差的形式的经典方法。",
    explanation: `<strong>第一步：通分</strong>
$$\\frac{2}{1-x^2}-\\frac{1}{1-x} = \\frac{2}{(1-x)(1+x)}-\\frac{1}{1-x}$$

<strong>第二步：找公分母</strong>
$$= \\frac{2-(1+x)}{(1-x)(1+x)} = \\frac{1-x}{(1-x)(1+x)}$$

<strong>第三步：化简</strong>
$$= \\frac{1}{1+x}$$（当$x \\neq 1$时）

<strong>第四步：求极限</strong>
$$\\lim\limits_{x\\to 1}\\frac{1}{1+x} = \\frac{1}{2}$$`,
    answer: "$\\frac{1}{2}$",
    difficulty: "medium",
    category: "极限基础运算",
    method: "通分化简"
  },

  // 新增的高职版极限练习题
  // 第二部分：基础计算题 (共4题)
  {
    id: 19,
    type: "基础计算题",
    title: "因式分解法",
    question: "计算 $\\lim\\limits_{x \\to 3} \\frac{x^2 - x - 6}{x - 3}$",
    essence: "这道题考查因式分解法处理 $\\frac{0}{0}$ 型极限。当直接代入得到 $\\frac{0}{0}$ 型时，需要先因式分解分子分母，约去公因式，然后再计算极限。这是处理有理函数极限的经典方法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：检查极限类型</strong>
直接代入得到 $\\frac{0}{0}$ 型，需要使用因式分解法

<strong>第二步：因式分解</strong>
使用十字相乘法分解分子：
$$x^2 - x - 6 = (x-3)(x+2)$$

<strong>第三步：约分</strong>
$$\\frac{x^2 - x - 6}{x - 3} = \\frac{(x-3)(x+2)}{x-3} = x + 2$$

<strong>第四步：计算极限</strong>
$$\\lim\\limits_{x \\to 3} \\frac{x^2 - x - 6}{x - 3} = \\lim\\limits_{x \\to 3} (x + 2) = 3 + 2 = 5$$`,
    answer: "5",
    difficulty: "easy",
    category: "极限基础运算",
    method: "因式分解法"
  },
  {
    id: 20,
    type: "基础计算题",
    title: "有理化法",
    question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sqrt{x+1} - 1}{x}$",
    essence: "这道题考查有理化法处理含根号的 $\\frac{0}{0}$ 型极限。当分子或分母含有根号且直接代入得到 $\\frac{0}{0}$ 型时，需要有理化消去根号，然后化简计算。这是处理含根号极限的常用方法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：检查极限类型</strong>
直接代入得到 $\\frac{0}{0}$ 型，需要使用有理化法

<strong>第二步：有理化</strong>
分子分母同乘以 $(\\sqrt{x+1} + 1)$：
$$\\frac{\\sqrt{x+1} - 1}{x} \\cdot \\frac{\\sqrt{x+1} + 1}{\\sqrt{x+1} + 1} = \\frac{(x+1) - 1}{x(\\sqrt{x+1} + 1)} = \\frac{x}{x(\\sqrt{x+1} + 1)}$$

<strong>第三步：约分</strong>
$$= \\frac{1}{\\sqrt{x+1} + 1}$$

<strong>第四步：计算极限</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sqrt{x+1} - 1}{x} = \\lim\\limits_{x \\to 0} \\frac{1}{\\sqrt{x+1} + 1} = \\frac{1}{\\sqrt{0+1} + 1} = \\frac{1}{2}$$`,
    answer: "$\\frac{1}{2}$",
    difficulty: "easy",
    category: "极限基础运算",
    method: "有理化法"
  },

  // 第三部分：进阶计算题 (共4题)
  {
    id: 21,
    type: "进阶计算题",
    title: "第一重要极限",
    question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin(5x)}{3x}$",
    essence: "这道题考查第一重要极限的应用。需要将题目凑成标准形式$\\frac{\\sin u}{u}$，然后应用极限值等于1的结论。关键是要会进行适当的系数调整。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：凑第一重要极限的形式</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin(5x)}{3x} = \\lim\\limits_{x \\to 0} \\frac{\\sin(5x)}{5x} \\cdot \\frac{5x}{3x}$$

<strong>第二步：应用第一重要极限</strong>
$$= \\lim\\limits_{x \\to 0} \\frac{\\sin(5x)}{5x} \\cdot \\frac{5}{3} = 1 \\cdot \\frac{5}{3} = \\frac{5}{3}$$`,
    answer: "$\\frac{5}{3}$",
    difficulty: "medium",
    category: "两个重要极限",
    method: "第一重要极限"
  },
  {
    id: 22,
    type: "进阶计算题",
    title: "等价无穷小替换",
    question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\tan(2x)}{e^x - 1}$",
    essence: "这道题考查等价无穷小替换法计算极限。当x→0时，可以将复杂的函数替换为等价的简单函数，从而简化计算。需要熟记常用的等价无穷小公式。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：使用等价无穷小</strong>
当 $x \\to 0$ 时：
- $\\tan(2x) \\sim 2x$
- $e^x - 1 \\sim x$

<strong>第二步：替换并计算</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\tan(2x)}{e^x - 1} = \\lim\\limits_{x \\to 0} \\frac{2x}{x} = 2$$`,
    answer: "2",
    difficulty: "medium",
    category: "等价无穷小",
    method: "等价无穷小替换"
  },
  {
    id: 23,
    type: "进阶计算题",
    title: "等价无穷小综合",
    question: "计算 $\\lim\\limits_{x \\to 0} \\frac{1 - \\cos x}{\\sin^2 x}$",
    essence: "这道题考查等价无穷小替换的综合应用。需要同时使用 $1-\cos x \sim \dfrac{x^2}{2}$ 和 $\sin x \sim x$ 的等价关系，然后化简计算。这是处理含三角函数和余弦函数的极限的典型方法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：使用等价无穷小</strong>
当 $x \\to 0$ 时：
- $1 - \\cos x \\sim \\frac{x^2}{2}$
- $\\sin x \\sim x$，所以 $\\sin^2 x \\sim x^2$

<strong>第二步：替换并计算</strong>
$$\\lim\\limits_{x \\to 0} \\frac{1 - \\cos x}{\\sin^2 x} = \\lim\\limits_{x \\to 0} \\frac{\\frac{x^2}{2}}{x^2} = \\frac{1}{2}$$`,
    answer: "$\\frac{1}{2}$",
    difficulty: "medium",
    category: "等价无穷小",
    method: "等价无穷小综合"
  },

  // 第四部分：应用判断题 (共2题)
  {
    id: 24,
    type: "应用判断题",
    title: "判断连续性",
    question: "判断函数 $f(x) = \\begin{cases} \\frac{\\sin x}{x}, & x \\neq 0 \\\\ 1, & x = 0 \\end{cases}$ 在 $x=0$ 点是否连续？",
    essence: "这道题考查函数连续性的判断。需要比较函数值和极限值是否相等。对于分段函数，特别要注意在分段点处的连续性判断，通常需要计算极限并与函数值比较。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：计算函数值</strong>
$$f(0) = 1$$

<strong>第二步：计算极限</strong>
$$\\lim\\limits_{x \\to 0} f(x) = \\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = 1$$
（使用第一重要极限）

<strong>第三步：比较</strong>
因为 $\\lim\\limits_{x \\to 0} f(x) = f(0) = 1$，所以函数在 $x=0$ 点连续。`,
    answer: "连续",
    difficulty: "easy",
    category: "连续性与间断点",
    method: "连续性判断"
  },
  {
    id: 25,
    type: "应用判断题",
    title: "求参数使函数连续",
    question: "已知函数 $f(x) = \\begin{cases} 2x + k, & x \\le 1 \\\\ 4x - 1, & x > 1 \\end{cases}$。如果 $f(x)$ 在 $x=1$ 处是连续的，请求出常数 $k$ 的值。",
    essence: "这道题考查分段函数连续性的参数求解。根据连续性定义，需要使左极限等于右极限，从而建立关于参数k的方程并求解。这是分段函数连续性问题的典型解法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：计算左极限</strong>
$$\\lim\\limits_{x \\to 1^-} f(x) = \\lim\\limits_{x \\to 1^-} (2x + k) = 2(1) + k = 2 + k$$

<strong>第二步：计算右极限</strong>
$$\\lim\\limits_{x \\to 1^+} f(x) = \\lim\\limits_{x \\to 1^+} (4x - 1) = 4(1) - 1 = 3$$

<strong>第三步：连续性条件</strong>
要使函数连续，必须满足左极限 = 右极限：
$$2 + k = 3$$
$$k = 1$$`,
    answer: "k = 1",
    difficulty: "easy",
    category: "连续性与间断点",
    method: "求参数使函数连续"
  },

  // 高职版极限最终版练习题
  // 第一部分：计算技巧综合题 (共5题)
  {
    id: 26,
    type: "计算技巧综合题",
    title: "非0/0型极限计算",
    question: "计算 $\\lim\\limits_{x \\to 3^+} \\frac{x+1}{x-3}$",
    essence: "这道题考查非$\\frac{0}{0}$型极限的分析方法。当直接代入得到非$\\frac{k}{0}$型时，需要分析极限的符号和趋向。关键是要理解单侧极限的含义和无穷大的符号判断。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：分析极限类型</strong>
将 $x=3$ 代入，得到 $\\frac{4}{0}$，这表示极限是无穷大

<strong>第二步：确定无穷大的符号</strong>
因为是 $x \\to 3^+$，表示 $x$ 是一个比 3 稍大的数（例如 3.001），所以分母 $x-3$ 是一个很小的正数。分子是正数 4，所以结果是 $+\\infty$

<strong>答案：</strong> $+\\infty$`,
    answer: "$+\\infty$",
    difficulty: "easy",
    category: "极限基础运算",
    method: "非0/0型分析"
  },
  {
      id: 27,
    type: "计算技巧综合题",
    title: "通分法处理∞-∞型",
    question: "计算 $\\lim\\limits_{x \\to 1} \\left( \\frac{1}{x-1} - \\frac{2}{x^2-1} \\right)$",
    essence: "这道题考查通分法处理∞-∞型极限。当直接代入得到∞-∞型时，需要先通分化为分式形式，然后化简约分，最后计算极限。这是处理有理函数差的形式的经典方法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：通分</strong>
$$\\frac{1}{x-1} - \\frac{2}{x^2-1} = \\frac{x+1}{(x-1)(x+1)} - \\frac{2}{(x-1)(x+1)} = \\frac{x+1-2}{(x-1)(x+1)} = \\frac{x-1}{(x-1)(x+1)}$$

<strong>第二步：约分</strong>
$$= \\frac{1}{x+1}$$

<strong>第三步：计算极限</strong>
$$\\lim\\limits_{x \\to 1} \\frac{1}{x+1} = \\frac{1}{1+1} = \\frac{1}{2}$$`,
    answer: "$\\frac{1}{2}$",
    difficulty: "medium",
    category: "极限基础运算",
    method: "通分法"
  },
  {
    id: 28,
    type: "计算技巧综合题",
    title: "复杂因式分解",
    question: "计算 $\\lim\\limits_{x \\to 1} \\frac{x^3 - 1}{x^2 - 3x + 2}$",
    essence: "这道题考查复杂因式分解法处理0/0型极限。需要同时分解分子和分母，使用立方差公式和十字相乘法，然后约分计算。这是处理高次有理函数极限的典型方法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：检查极限类型</strong>
直接代入得到 $\\frac{0}{0}$ 型，需要使用因式分解法

<strong>第二步：因式分解</strong>
- 分子：$x^3 - 1 = (x-1)(x^2+x+1)$（立方差公式）
- 分母：$x^2 - 3x + 2 = (x-1)(x-2)$（十字相乘法）

<strong>第三步：约分并计算</strong>
$$\\lim\\limits_{x \\to 1} \\frac{(x-1)(x^2+x+1)}{(x-1)(x-2)} = \\lim\\limits_{x \\to 1} \\frac{x^2+x+1}{x-2} = \\frac{1+1+1}{1-2} = -3$$`,
    answer: "-3",
    difficulty: "medium",
    category: "极限基础运算",
    method: "复杂因式分解"
  },
  {
    id: 29,
    type: "计算技巧综合题",
    title: "处理x→∞的有理函数",
    question: "计算 $\\lim\\limits_{x \\to \\infty} \\frac{3x^2 - 5x + 1}{2x^2 + x - 4}$",
    essence: "这道题考查有理函数在无穷远处的极限性质。当x→∞时，有理函数的极限值等于最高次项系数之比。需要提取最高次项并化简计算。这是处理有理函数无穷极限的经典方法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：分析极限类型</strong>
$x \\to \\infty$ 的有理函数，极限值等于最高次项系数之比

<strong>第二步：提取最高次项</strong>
$$\\lim\\limits_{x \\to \\infty} \\frac{3x^2 - 5x + 1}{2x^2 + x - 4} = \\lim\\limits_{x \\to \\infty} \\frac{x^2(3 - \\frac{5}{x} + \\frac{1}{x^2})}{x^2(2 + \\frac{1}{x} - \\frac{4}{x^2})}$$

<strong>第三步：约分并计算</strong>
$$= \\lim\\limits_{x \\to \\infty} \\frac{3 - \\frac{5}{x} + \\frac{1}{x^2}}{2 + \\frac{1}{x} - \\frac{4}{x^2}} = \\frac{3 - 0 + 0}{2 + 0 - 0} = \\frac{3}{2}$$`,
    answer: "$\\frac{3}{2}$",
    difficulty: "easy",
    category: "极限概念和定理",
    method: "有理函数极限"
  },
  {
    id: 30,
    type: "计算技巧综合题",
    title: "处理x→∞的根式",
    question: "计算 $\\lim\\limits_{x \\to +\\infty} (\\sqrt{x^2+x} - x)$",
    essence: "这道题考查根式有理化处理∞-∞型极限。当出现∞-∞型的根式时，需要乘以共轭因式进行有理化，然后化简计算。这是处理含根号的无穷极限的典型方法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：分析极限类型</strong>
"∞ - ∞" 型的根式，通过乘以共轭因式来化简

<strong>第二步：有理化</strong>
$$\\lim\\limits_{x \\to +\\infty} (\\sqrt{x^2+x} - x) \\cdot \\frac{\\sqrt{x^2+x} + x}{\\sqrt{x^2+x} + x}$$

<strong>第三步：化简</strong>
$$= \\lim\\limits_{x \\to +\\infty} \\frac{(x^2+x) - x^2}{\\sqrt{x^2+x} + x} = \\lim\\limits_{x \\to +\\infty} \\frac{x}{\\sqrt{x^2+x} + x}$$

<strong>第四步：提取公因子</strong>
$$= \\lim\\limits_{x \\to +\\infty} \\frac{x}{x\\sqrt{1+\\frac{1}{x}} + x} = \\lim\\limits_{x \\to +\\infty} \\frac{1}{\\sqrt{1+\\frac{1}{x}} + 1} = \\frac{1}{\\sqrt{1+0} + 1} = \\frac{1}{2}$$`,
    answer: "$\\frac{1}{2}$",
    difficulty: "medium",
    category: "极限概念和定理",
    method: "根式有理化"
  },

  // 第二部分：重要极限与等价无穷小进阶 (共5题)
  {
    id: 31,
    type: "重要极限与等价无穷小进阶",
    title: "第一重要极限变形",
    question: "计算 $\\lim\\limits_{x \\to 0} \\frac{x^2}{1 - \\cos x}$",
    essence: "利用 $1-\cos x \sim \\dfrac{1}{2}x^2$，将极限 $\\lim\\limits_{x\\to 0} \\dfrac{x^2}{1-\cos x}$ 化为 $\\lim\\limits_{x\\to 0} \\dfrac{x^2}{\\frac{1}{2}x^2} = 2$。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：使用等价无穷小</strong>
当 $x \\to 0$ 时，$1 - \\cos x \\sim \\frac{1}{2}x^2$

<strong>第二步：替换并计算</strong>
$$\\lim\\limits_{x \\to 0} \\frac{x^2}{1 - \\cos x} = \\lim\\limits_{x \\to 0} \\frac{x^2}{\\frac{1}{2}x^2} = \\lim\\limits_{x \\to 0} \\frac{x^2}{\\frac{1}{2}x^2} = 2$$`,
    answer: "2",
    difficulty: "medium",
    category: "极限概念和定理",
    method: "等价无穷小替换"
  },
  {
    id: 32,
    type: "重要极限与等价无穷小进阶",
    title: "等价无穷小替换",
    question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\ln(1+3x)}{\\sin(5x)}$",
    essence: "这道题考查等价无穷小替换的综合应用。需要同时使用 $\\ln(1+3x) \\sim 3x$ 和 $\\sin(5x) \\sim 5x$ 的等价关系，然后化简计算。这是处理含对数和三角函数极限的典型方法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：使用等价无穷小</strong>
当 $x \\to 0$ 时：
- $\\ln(1+3x) \\sim 3x$
- $\\sin(5x) \\sim 5x$

<strong>第二步：替换并计算</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\ln(1+3x)}{\\sin(5x)} = \\lim\\limits_{x \\to 0} \\frac{3x}{5x} = \\frac{3}{5}$$`,
    answer: "$\\frac{3}{5}$",
    difficulty: "easy",
    category: "极限概念和定理",
    method: "等价无穷小替换"
  },


  // 第三部分：连续性综合应用 (共1题)
  {
    id: 33,
    type: "连续性综合应用",
    title: "判断间断点类型",
    question: "指出函数 $f(x) = \\frac{x^2-9}{x-3}$ 在 $x=3$ 处的间断点类型。",
    essence: "这道题考查间断点类型的判断。需要先化简函数，计算极限，然后根据极限是否存在以及函数值是否定义来判断间断点类型。这是连续性问题的典型解法。",
    explanation: `<strong>解题思路：</strong>

<strong>第一步：分析函数定义</strong>
函数在 $x=3$ 处无定义（分母为0）

<strong>第二步：计算极限</strong>
$$\\lim\\limits_{x \\to 3} \\frac{x^2-9}{x-3} = \\lim\\limits_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim\\limits_{x \\to 3} (x+3) = 6$$

<strong>第三步：判断间断点类型</strong>
因为极限存在（等于6）但函数值无定义，所以是可去间断点。

<strong>补充说明：</strong>如果定义 $f(3) = 6$，则函数在 $x=3$ 处连续。`,
    answer: "可去间断点",
    difficulty: "easy",
    category: "极限概念和定理",
    method: "间断点类型判断"
  },

{
  id: 34,
  type: "第一重要极限",
  title: "系数调整1",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin 2x}{x}$",
  essence: "这道题考查第一重要极限的系数调整技巧。需要将题目凑成标准形式 $\\frac{\\sin 2x}{2x}$，然后应用 $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = 1$ 的结论，最后乘以调整系数。这是第一重要极限的典型应用。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：凑出标准形式</strong>
分子分母同时乘以2：
$$\\frac{\\sin 2x}{x} = \\frac{\\sin 2x}{2x} \\cdot 2$$

<strong>第二步：应用第一重要极限</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin 2x}{2x} \\cdot 2 = 1 \\cdot 2 = 2$$`,
  answer: "2",
  difficulty: "easy",
  category: "两个重要极限",
  method: "第一重要极限"
},

{
  id: 35,
  type: "第一重要极限",
  title: "系数调整2",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin 3x}{5x}$",
  essence: "这道题考查第一重要极限的系数分离技巧。需要将分子分母的系数分离，凑成标准形式 $\\frac{\\sin 3x}{3x}$，然后应用 $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = 1$ 的结论，最后乘以系数比。这是第一重要极限的进阶应用。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：分离系数</strong>
$$\\frac{\\sin 3x}{5x} = \\frac{\\sin 3x}{3x} \\cdot \\frac{3x}{5x} = \\frac{\\sin 3x}{3x} \\cdot \\frac{3}{5}$$

<strong>第二步：应用第一重要极限</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin 3x}{3x} \\cdot \\frac{3}{5} = 1 \\cdot \\frac{3}{5} = \\frac{3}{5}$$`,
  answer: "$\\frac{3}{5}$",
  difficulty: "easy",
  category: "两个重要极限",
  method: "第一重要极限"
},

{
  id: 36,
  type: "第一重要极限",
  title: "简单换元",
  question: "计算 $\\lim\\limits_{t \\to 0} \\frac{\\sin 5t}{5t}$",
  essence: "这道题考查第一重要极限的换元技巧。通过换元 $u=5t$，将题目化为标准形式 $\\frac{\\sin u}{u}$，然后直接应用极限值等于1的结论。这是第一重要极限的换元应用。",
  explanation: `<strong>解题思路：</strong>

令 $u = 5t$，当 $t \\to 0$ 时，$u \\to 0$

$$\\lim\\limits_{t \\to 0} \\frac{\\sin 5t}{5t} = \\lim\\limits_{u \\to 0} \\frac{\\sin u}{u} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "两个重要极限",
  method: "简单换元"
},

{
  id: 37,
  type: "第一重要极限",
  title: "正切函数",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\tan x}{x}$",
  essence: "这道题考查第一重要极限在正切函数中的应用。需要先将 $\\tan x$ 展开为 $\\frac{\\sin x}{\\cos x}$，然后分离极限，利用 $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = 1$ 和 $\\lim\\limits_{x \\to 0} \\cos x = 1$ 的结论。这是第一重要极限的变形应用。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：展开正切</strong>
$$\\tan x = \\frac{\\sin x}{\\cos x}$$

<strong>第二步：代入计算</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\tan x}{x} = \\lim\\limits_{x \\to 0} \\frac{\\sin x}{x \\cos x}$$

<strong>第三步：分离极限</strong>
$$= \\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\lim\\limits_{x \\to 0} \\frac{1}{\\cos x} = 1 \\cdot 1 = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "两个重要极限",
  method: "第一重要极限"
},

{
  id: 38,
  type: "第一重要极限",
  title: "分式形式",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin 2x}{\\sin 3x}$",
  essence: "这道题考查第一重要极限在分式形式中的应用。需要将分子分母同时除以 $x$，然后分离系数，利用 $\\frac{\\sin 2x}{2x} = 1$ 和 $\\frac{\\sin 3x}{3x} = 1$ 的结论。这是第一重要极限的综合应用。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：分子分母同时除以x</strong>
$$\\frac{\\sin 2x}{\\sin 3x} = \\frac{\\frac{\\sin 2x}{x}}{\\frac{\\sin 3x}{x}}$$

<strong>第二步：分离系数</strong>
$$= \\frac{\\frac{\\sin 2x}{2x} \\cdot 2}{\\frac{\\sin 3x}{3x} \\cdot 3}$$

<strong>第三步：应用第一重要极限</strong>
$$\\lim\\limits_{x \\to 0} \\frac{1 \\cdot 2}{1 \\cdot 3} = \\frac{2}{3}$$`,
  answer: "$\\frac{2}{3}$",
  difficulty: "medium",
  category: "两个重要极限",
  method: "第一重要极限"
},


{
      id: 39,
  type: "第一重要极限",
  title: "余弦形式",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{1 - \\cos x}{\\frac{x^2}{2}}$",
  essence: "这道题考查等价无穷小替换法计算极限。需要利用 $1 - \\cos x \\sim \\frac{x^2}{2}$ 的等价关系，将复杂的余弦函数替换为简单的幂函数，然后化简计算。这是处理含余弦函数极限的典型方法。",
  explanation: `<strong>解题思路：</strong>

<strong>使用公式：</strong>
当 $x \\to 0$ 时，$1 - \\cos x \\sim \\frac{x^2}{2}$

$$\\lim\\limits_{x \\to 0} \\frac{1 - \\cos x}{\\frac{x^2}{2}} = \\lim\\limits_{x \\to 0} \\frac{\\frac{x^2}{2}}{\\frac{x^2}{2}} = 1$$`,
  answer: "1",
  difficulty: "medium",
  category: "两个重要极限",
  method: "三角公式"
},

{
  id: 40,
  type: "第一重要极限",
  title: "乘积形式",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{x}{\\sin x}$",
  essence: "这道题考查第一重要极限的倒数形式应用。需要将 $\\frac{x}{\\sin x}$ 化为 $\\frac{1}{\\frac{\\sin x}{x}}$ 的形式，然后利用 $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = 1$ 的结论。这是第一重要极限的倒数关系应用。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：倒数关系</strong>
$$\\frac{x}{\\sin x} = \\frac{1}{\\frac{\\sin x}{x}}$$

<strong>第二步：应用第一重要极限</strong>
$$\\lim\\limits_{x \\to 0} \\frac{1}{\\frac{\\sin x}{x}} = \\frac{1}{1} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "两个重要极限",
  method: "倒数形式"
},



{
  id: 41,
  type: "第一重要极限",
  title: "平方形式",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin^2 x}{x^2}$",
  essence: "这道题考查第一重要极限的平方形式应用。需要将 $\\frac{\\sin^2 x}{x^2}$ 化为 $\\left(\\frac{\\sin x}{x}\\right)^2$ 的形式，然后利用 $\\frac{\\sin x}{x}=1$ 的结论，最后计算 $1^2=1$。这是第一重要极限的幂次应用。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：分解</strong>
$$\\frac{\\sin^2 x}{x^2} = \\left(\\frac{\\sin x}{x}\\right)^2$$

<strong>第二步：应用第一重要极限</strong>
$$\\lim\\limits_{x \\to 0} \\left(\\frac{\\sin x}{x}\\right)^2 = 1^2 = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "两个重要极限",
  method: "平方形式"
},



  {
    id: 42,
    type: "第二重要极限",
    title: "标准形式",
    question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x$",
    essence: "这道题考查第二重要极限的标准形式。这是定义自然常数e的经典极限，需要理解其几何意义和换元思想，掌握从标准形式推广到一般情形的技巧。",
    explanation: `<strong>解题思路：</strong>
这是第二重要极限的标准形式，常用换元思想可以推广到更一般的情形。

<strong>换元思想：</strong>
令 $t = \\frac{1}{x}$，当 $x \\to \\infty$ 时，$t \\to 0^+$，则
$$\\left(1 + \\frac{1}{x}\\right)^x = (1 + t)^{\\frac{1}{t}}$$

<strong>标准公式：</strong>
$$\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = \\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$

<strong>结论：</strong>
答案为 $e$。`,
  answer: "$e$",
  difficulty: "easy",
  category: "两个重要极限",
  method: "第二重要极限"
},

{
  id: 43,
  type: "第二重要极限",
  title: "系数形式1",
  question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{2}{x}\\right)^x$",
  essence: "这道题考查第二重要极限的系数形式应用。通过换元 $t=\\frac{2}{x}$，将题目化为标准形式 $(1+t)^{\\frac{1}{t}}$，然后应用极限值 $e$ 的结论，最后计算 $e^2$。这是第二重要极限的换元技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：换元</strong>
令 $t = \\frac{2}{x}$，当 $x \\to \\infty$ 时，$t \\to 0^+$，则 $x = \\frac{2}{t}$

<strong>第二步：代入</strong>
$$\\left(1 + \\frac{2}{x}\\right)^x = (1 + t)^{\\frac{2}{t}} = [(1 + t)^{\\frac{1}{t}}]^2$$

<strong>第三步：应用标准公式</strong>
$$\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$

<strong>最终结果：</strong>
$$(e)^2 = e^2$$`,
  answer: "$e^2$",
  difficulty: "easy",
  category: "两个重要极限",
  method: "换元法"
},

{
  id: 44,
  type: "第二重要极限",
  title: "系数形式2",
  question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^{2x}$",
  essence: "这道题考查第二重要极限的复合系数形式应用。通过换元 $t=\\frac{3}{x}$，将题目化为标准形式 $(1+t)^{\\frac{6}{t}}$，然后应用极限值等于 $e$ 的结论，最后计算 $e^6$。这是第二重要极限的复合换元技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：换元</strong>
令 $t = \\frac{3}{x}$，当 $x \\to \\infty$ 时，$t \\to 0^+$，则 $x = \\frac{3}{t}$

<strong>第二步：代入</strong>
$$\\left(1 + \\frac{3}{x}\\right)^{2x} = (1 + t)^{2 \\cdot \\frac{3}{t}} = (1 + t)^{\\frac{6}{t}} = [(1 + t)^{\\frac{1}{t}}]^6$$

<strong>第三步：应用标准公式</strong>
$$\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$

<strong>最终结果：</strong>
$$(e)^6 = e^6$$`,
  answer: "$e^6$",
  difficulty: "medium",
  category: "两个重要极限",
  method: "换元法"
},

{
    id: 45,
  type: "第二重要极限",
  title: "负数形式",
  question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(1 - \\frac{1}{x}\\right)^x$",
  essence: "这道题考查第二重要极限的负数形式应用。需要将 $1 - \\frac{1}{x}$ 改写为 $1 + \\frac{-1}{x}$ 的形式，然后通过换元化为标准形式，最后应用极限值等于 $e$ 的结论得到 $\\frac{1}{e}$。这是第二重要极限的负数换元技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：改写为标准形式</strong>
$$\\left(1 - \\frac{1}{x}\\right)^x = \\left(1 + \\frac{-1}{x}\\right)^x$$

<strong>第二步：换元</strong>
令 $t = -\\frac{1}{x}$，当 $x \\to \\infty$ 时，$t \\to 0^-$，则 $x = -\\frac{1}{t}$

<strong>第三步：代入</strong>
$$\\left(1 + t\\right)^{-\\frac{1}{t}} = \\frac{1}{(1 + t)^{\\frac{1}{t}}}$$

<strong>第四步：应用标准公式</strong>
$$\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$

<strong>最终结果：</strong>
$$\\frac{1}{e}$$`,
  answer: "$\\frac{1}{e}$",
  difficulty: "medium",
  category: "两个重要极限",
  method: "换元法"
},

{
  id: 46,
  type: "第二重要极限",
  title: "x趋于0形式",
  question: "计算 $\\lim\\limits_{x \\to 0} (1 + x)^{\\frac{1}{x}}$",
  essence: "这道题考查第二重要极限的 $x \\to 0$ 形式应用。当 $x \\to 0$ 时，$(1+x)^{\\frac{1}{x}}$ 直接就是第二重要极限的标准形式，极限值等于 $e$。这是第二重要极限的最直接应用。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：换元</strong>
令 $t = x$，当 $x \\to 0$ 时，$t \\to 0$

<strong>第二步：代入</strong>
$$(1 + x)^{\\frac{1}{x}} = (1 + t)^{\\frac{1}{t}}$$

<strong>第三步：应用标准公式</strong>
$$\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$`,
  answer: "$e$",
  difficulty: "easy",
  category: "两个重要极限",
  method: "换元法"
},

{
  id: 47,
  type: "第二重要极限",
  title: "分式形式",
  question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(\\frac{x+1}{x}\\right)^x$",
  essence: "这道题考查第二重要极限的分式形式应用。需要先将分式 $\\frac{x+1}{x}$ 化简为 $1+\\frac{1}{x}$ 的形式，然后通过换元化为标准形式 $(1+t)^{\\frac{1}{t}}$，最后应用极限值等于 $e$ 的结论。这是第二重要极限的分式化简技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：化简分式</strong>
$$\\frac{x+1}{x} = 1 + \\frac{1}{x}$$

<strong>第二步：换元</strong>
令 $t = \\frac{1}{x}$，当 $x \\to \\infty$ 时，$t \\to 0^+$

<strong>第三步：代入并应用标准公式</strong>
$$(1 + t)^{\\frac{1}{t}} \\to e$$

<strong>最终结果：</strong>
$e$`,
  answer: "$e$",
  difficulty: "easy",
  category: "两个重要极限",
  method: "换元法"
},

{
  id: 48,
  type: "第二重要极限",
  title: "分式形式2",
  question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(\\frac{x+2}{x}\\right)^{3x}$",
  essence: "这道题考查第二重要极限的复合分式形式应用。需要先将分式 $\\frac{x+2}{x}$ 化简为 $1+\\frac{2}{x}$ 的形式，然后通过换元化为标准形式 $(1+t)^{\\frac{6}{t}}$，最后应用极限值等于 $e$ 的结论得到 $e^6$。这是第二重要极限的复合分式技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：化简底数</strong>
$$\\frac{x+2}{x} = 1 + \\frac{2}{x}$$

<strong>第二步：换元</strong>
令 $t = \\frac{2}{x}$，当 $x \\to \\infty$ 时，$t \\to 0^+$，$x = \\frac{2}{t}$

<strong>第三步：代入</strong>
$$\\left(1 + \\frac{2}{x}\\right)^{3x} = (1 + t)^{3 \\cdot \\frac{2}{t}} = (1 + t)^{\\frac{6}{t}} = [(1 + t)^{\\frac{1}{t}}]^6$$

<strong>第四步：应用标准公式</strong>
$$\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$

<strong>最终结果：</strong>
$e^6$`,
  answer: "$e^6$",
  difficulty: "medium",
  category: "两个重要极限",
  method: "换元法"
},

{
  id: 49,
  type: "第二重要极限",
  title: "常数形式",
  question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{5}{x}\\right)^x$",
  essence: "这道题考查第二重要极限的常数形式应用。通过换元 $t=\\frac{5}{x}$，将题目化为标准形式 $(1+t)^{\\frac{5}{t}}$，然后应用极限值等于 $e$ 的结论，最后计算 $e^5$。这是第二重要极限的常数换元技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：换元</strong>
令 $t = \\frac{5}{x}$，当 $x \\to \\infty$ 时，$t \\to 0^+$，$x = \\frac{5}{t}$

<strong>第二步：代入</strong>
$$\\left(1 + \\frac{5}{x}\\right)^x = (1 + t)^{\\frac{5}{t}} = [(1 + t)^{\\frac{1}{t}}]^5$$

<strong>第三步：应用标准公式</strong>
$$\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$

<strong>最终结果：</strong>
$e^5$`,
  answer: "$e^5$",
  difficulty: "easy",
  category: "两个重要极限",
  method: "换元法"
},


{
        id: 50,
  type: "第二重要极限",
  title: "n替代x",
  question: "计算 $\\lim\\limits_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^{n+1}$",
  essence: "这道题考查第二重要极限的指数分解技巧。需要将 $(1+\\frac{1}{n})^{n+1}$ 分解为 $(1+\\frac{1}{n})^n \\cdot (1+\\frac{1}{n})$ 的形式，然后分别计算两个因式的极限，最后相乘得到 $e \\cdot 1 = e$。这是第二重要极限的指数分解方法。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：分解指数</strong>
$$\\left(1 + \\frac{1}{n}\\right)^{n+1} = \\left(1 + \\frac{1}{n}\\right)^n \\cdot \\left(1 + \\frac{1}{n}\\right)$$

<strong>第二步：分别求极限</strong>
第一部分：$\\lim\\limits_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$
第二部分：$\\lim\\limits_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right) = 1$

<strong>第三步：相乘</strong>
$$e \\cdot 1 = e$$

<strong>补充换元思想：</strong>
$\\left(1 + \\frac{1}{n}\\right)^n$ 可令 $t = \\frac{1}{n}$，$t \\to 0^+$，得到 $(1 + t)^{\\frac{1}{t}} \\to e$。`,
  answer: "$e$",
  difficulty: "medium",
  category: "两个重要极限",
  method: "换元法"
},

{
  id: 51,
  type: "第二重要极限",
  title: "2x形式",
  question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(1 + \\frac{1}{2x}\\right)^x$",
  essence: "这道题考查第二重要极限的2x形式应用。通过换元 $t=\\frac{1}{2x}$，将题目化为标准形式 $(1+t)^{\\frac{1}{2t}}$，然后应用极限值等于 $e$ 的结论，最后计算 $e^{\\frac{1}{2}}=\\sqrt{e}$。这是第二重要极限的分数指数技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：换元</strong>
令 $t = \\frac{1}{2x}$，当 $x \\to \\infty$ 时，$t \\to 0^+$，$x = \\frac{1}{2t}$

<strong>第二步：代入</strong>
$$\\left(1 + \\frac{1}{2x}\\right)^x = (1 + t)^{\\frac{1}{2t}} = [(1 + t)^{\\frac{1}{t}}]^{\\frac{1}{2}}$$

<strong>第三步：应用标准公式</strong>
$$\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$

<strong>最终结果：</strong>
$$e^{\\frac{1}{2}} = \\sqrt{e}$$`,
  answer: "$\\sqrt{e}$",
  difficulty: "medium",
  category: "两个重要极限",
  method: "换元法"
},

{
  id: 52,
  type: "第二重要极限",
  title: "简单应用",
  question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(1 - \\frac{3}{x}\\right)^x$",
  essence: "这道题考查第二重要极限的负数形式应用。通过换元 $t=-\\frac{3}{x}$，将题目化为标准形式 $(1+t)^{-\\frac{3}{t}}$，然后应用极限值等于 $e$ 的结论，最后计算 $e^{-3}=\\frac{1}{e^3}$。这是第二重要极限的负数换元技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：换元</strong>
令 $t = -\\frac{3}{x}$，当 $x \\to \\infty$ 时，$t \\to 0^-$，$x = -\\frac{3}{t}$

<strong>第二步：代入</strong>
$$\\left(1 - \\frac{3}{x}\\right)^x = (1 + t)^{-\\frac{3}{t}} = [(1 + t)^{\\frac{1}{t}}]^{-3}$$

<strong>第三步：应用标准公式</strong>
$$\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$

<strong>最终结果：</strong>
$$e^{-3} = \\frac{1}{e^3}$$`,
  answer: "$e^{-3}$",
  difficulty: "easy",
  category: "两个重要极限",
  method: "换元法"
},

{
  id: 53,
  type: "第二重要极限",
  title: "x-1形式",
  question: "计算 $\\lim\\limits_{x \\to \\infty} \\left(\\frac{x}{x-1}\\right)^x$",
  essence: "这道题考查第二重要极限的分式形式应用。需要先将分式 $\\frac{x}{x-1}$ 化简为 $1+\\frac{1}{x-1}$ 的形式，然后通过换元化为标准形式 $(1+t)^{\\frac{1}{t}}$，最后应用极限值等于 $e$ 的结论。这是第二重要极限的分式化简技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：化简分式</strong>
$$\\frac{x}{x-1} = 1 + \\frac{1}{x-1}$$

<strong>第二步：换元</strong>
令 $t = \\frac{1}{x-1}$，当 $x \\to \\infty$ 时，$t \\to 0^+$

<strong>第三步：代入并应用标准公式</strong>
$$(1 + t)^{\\frac{1}{t}} \\to e$$

<strong>最终结果：</strong>
$e$`,
  answer: "$e$",
  difficulty: "medium",
  category: "两个重要极限",
  method: "换元法"
},

{
  id: 54,
  type: "第二重要极限",
  title: "0的形式",
  question: "计算 $\\lim\\limits_{x \\to 0} (1 + 2x)^{\\frac{1}{x}}$",
  essence: "这道题考查第二重要极限的 $x \\to 0$ 形式应用。通过换元 $t=2x$，将题目化为标准形式 $(1+t)^{\\frac{2}{t}}$，然后应用极限值等于 $e$ 的结论，最后计算 $e^2$。这是第二重要极限的 $x \\to 0$ 换元技巧。",
  explanation: `<strong>解题思路：</strong>

<strong>第一步：换元</strong>
令 $t = 2x$，当 $x \\to 0$ 时，$t \\to 0$

<strong>第二步：代入</strong>
$$(1 + 2x)^{\\frac{1}{x}} = (1 + t)^{\\frac{2}{t}} = [(1 + t)^{\\frac{1}{t}}]^2$$

<strong>第三步：应用标准公式</strong>
$$\\lim\\limits_{t \\to 0} (1 + t)^{\\frac{1}{t}} = e$$

<strong>最终结果：</strong>
$e^2$`,
  answer: "$e^2$",
  difficulty: "medium",
  category: "两个重要极限",
  method: "换元法"
},


{
    id: 55,
  type: "等价无穷小",
  title: "sin x等价",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$\\sin x \\sim x$，可以直接将 $\\sin x$ 替换为 $x$，然后化简计算得到1。这是等价无穷小替换的基本应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$\\sin x \\sim x$

<strong>直接代入：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = \\lim\\limits_{x \\to 0} \\frac{x}{x} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "基本等价无穷小"
},

{
  id: 56,
  type: "等价无穷小",
  title: "tan x等价",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\tan x}{x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$\\tan x \\sim x$，可以直接将 $\\tan x$ 替换为 $x$，然后化简计算得到1。这是等价无穷小替换的基本应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$\\tan x \\sim x$

<strong>直接代入：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\tan x}{x} = \\lim\\limits_{x \\to 0} \\frac{x}{x} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "基本等价无穷小"
},

{
  id: 57,
  type: "等价无穷小",
  title: "arcsin x等价",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\arcsin x}{x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$\\arcsin x \\sim x$，可以直接将 $\\arcsin x$ 替换为 $x$，然后化简计算得到1。这是等价无穷小替换的基本应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$\\arcsin x \\sim x$

<strong>直接代入：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\arcsin x}{x} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "基本等价无穷小"
},

{
  id: 67,
  type: "等价无穷小",
  title: "arctan x等价",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\arctan x}{x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$\\arctan x \\sim x$，可以直接将 $\\arctan x$ 替换为 $x$，然后化简计算得到1。这是等价无穷小替换的基本应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$\\arctan x \\sim x$

<strong>直接代入：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\arctan x}{x} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "基本等价无穷小"
},

{
  id: 68,
  type: "等价无穷小",
  title: "e^x-1等价",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$e^x-1 \\sim x$，可以直接将 $e^x-1$ 替换为 $x$，然后化简计算得到1。这是等价无穷小替换的基本应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$e^x - 1 \\sim x$

<strong>直接代入：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{x} = \\lim\\limits_{x \\to 0} \\frac{x}{x} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "基本等价无穷小"
},

{
  id: 58,
  type: "等价无穷小",
  title: "ln(1+x)等价",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\ln(1 + x)}{x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$\\ln(1+x) \\sim x$，可以直接将 $\\ln(1+x)$ 替换为 $x$，然后化简计算得到1。这是等价无穷小替换的基本应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$\\ln(1 + x) \\sim x$

<strong>直接代入：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "基本等价无穷小"
},

{
  id: 70,
  type: "等价无穷小",
  title: "1-cos x等价",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{1 - \\cos x}{\\frac{x^2}{2}}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$1-\\cos x \\sim \\frac{x^2}{2}$，可以直接将 $1-\\cos x$ 替换为 $\\frac{x^2}{2}$，然后化简计算得到1。这是等价无穷小替换的基本应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$1 - \\cos x \\sim \\frac{x^2}{2}$

<strong>直接代入：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{1 - \\cos x}{\\frac{x^2}{2}} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "基本等价无穷小"
},

{
  id: 71,
  type: "等价无穷小",
  title: "应用1",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin 2x}{3x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$\\sin 2x \\sim 2x$，可以直接将 $\\sin 2x$ 替换为 $2x$，然后化简计算得到 $\\frac{2}{3}$。这是等价无穷小替换的系数应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$\\sin 2x \\sim 2x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin 2x}{3x} = \\lim\\limits_{x \\to 0} \\frac{2x}{3x} = \\frac{2}{3}$$`,
  answer: "$\\frac{2}{3}$",
  difficulty: "easy",
  category: "等价无穷小",
  method: "等价无穷小替换"
},

{
  id: 59,
  type: "等价无穷小",
  title: "应用2",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\tan 3x}{2x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$\\tan 3x \\sim 3x$，可以直接将 $\\tan 3x$ 替换为 $3x$，然后化简计算得到 $\\frac{3}{2}$。这是等价无穷小替换的系数应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$\\tan 3x \\sim 3x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\tan 3x}{2x} = \\lim\\limits_{x \\to 0} \\frac{3x}{2x} = \\frac{3}{2}$$`,
  answer: "$\\frac{3}{2}$",
  difficulty: "easy",
  category: "等价无穷小",
  method: "等价无穷小替换"
},

{
    id: 73,
  type: "等价无穷小",
  title: "应用3",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{e^{2x} - 1}{3x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$e^{2x}-1 \\sim 2x$，可以直接将 $e^{2x}-1$ 替换为 $2x$，然后化简计算得到 $\\frac{2}{3}$。这是等价无穷小替换的指数函数应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$e^{2x} - 1 \\sim 2x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{e^{2x} - 1}{3x} = \\lim\\limits_{x \\to 0} \\frac{2x}{3x} = \\frac{2}{3}$$`,
  answer: "$\\frac{2}{3}$",
  difficulty: "easy",
  category: "等价无穷小",
  method: "等价无穷小替换"
},

{
  id: 74,
  type: "等价无穷小",
  title: "应用4",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\ln(1 + 2x)}{x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$\\ln(1+2x) \\sim 2x$，可以直接将 $\\ln(1+2x)$ 替换为 $2x$，然后化简计算得到2。这是等价无穷小替换的对数函数应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$\\ln(1 + 2x) \\sim 2x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\ln(1 + 2x)}{x} = \\lim\\limits_{x \\to 0} \\frac{2x}{x} = 2$$`,
  answer: "2",
  difficulty: "easy",
  category: "等价无穷小",
  method: "等价无穷小替换"
},

{
      id: 60,
  type: "等价无穷小",
  title: "组合应用1",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{\\tan x}$",
  essence: "这道题考查等价无穷小替换法计算极限。当 $x \\to 0$ 时，$\\sin x \\sim x$，$\\tan x \\sim x$，可以直接将 $\\sin x$ 和 $\\tan x$ 都替换为 $x$，然后化简计算得到1。这是等价无穷小替换的组合应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时：
- $\\sin x \\sim x$
- $\\tan x \\sim x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin x}{\\tan x} = \\lim\\limits_{x \\to 0} \\frac{x}{x} = 1$$

<strong>或直接化简：</strong>
$$\\frac{\\sin x}{\\tan x} = \\frac{\\sin x}{\\frac{\\sin x}{\\cos x}} = \\cos x \\to 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "等价无穷小替换"
},

{
  id: 61,
  type: "等价无穷小",
  title: "组合应用2",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$",
  essence: "这道题考查等价无穷小替换的综合应用。需要先化简 $\\tan x - \\sin x$，然后利用 $\\sin x \\sim x$ 和 $1-\\cos x \\sim \\frac{x^2}{2}$ 的等价关系，最后化简计算得到 $\\frac{1}{2}$。这是等价无穷小替换的复杂组合应用。",
  explanation: `<strong>第一步：化简</strong>
$$\\tan x - \\sin x = \\sin x\\left(\\frac{1}{\\cos x} - 1\\right) = \\sin x \\cdot \\frac{1 - \\cos x}{\\cos x}$$

<strong>第二步：等价无穷小</strong>
- $\\sin x \\sim x$
- $1 - \\cos x \\sim \\frac{x^2}{2}$
- $\\cos x \\to 1$

<strong>第三步：代入</strong>
$$\\lim\\limits_{x \\to 0} \\frac{x \\cdot \\frac{x^2}{2}}{x^3 \\cdot 1} = \\frac{1}{2}$$`,
  answer: "$\\frac{1}{2}$",
  difficulty: "medium",
  category: "等价无穷小",
  method: "组合等价无穷小"
},

{
  id: 62,
  type: "等价无穷小",
  title: "乘积形式",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin x \\cdot \\tan x}{x^2}$",
  essence: "这道题考查等价无穷小替换的乘积形式应用。当 $x \\to 0$ 时，$\\sin x \\sim x$，$\\tan x \\sim x$，可以直接将 $\\sin x$ 和 $\\tan x$ 都替换为 $x$，然后化简计算得到1。这是等价无穷小替换的乘积形式应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时：
- $\\sin x \\sim x$
- $\\tan x \\sim x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin x \\cdot \\tan x}{x^2} = \\lim\\limits_{x \\to 0} \\frac{x \\cdot x}{x^2} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "乘积等价无穷小"
},

{
  id: 63,
  type: "等价无穷小",
  title: "分式形式",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\ln(1 + x)}{\\sin x}$",
  essence: "这道题考查等价无穷小替换的分式形式应用。当 $x \\to 0$ 时，$\\ln(1+x) \\sim x$，$\\sin x \\sim x$，可以直接将 $\\ln(1+x)$ 和 $\\sin x$ 都替换为 $x$，然后化简计算得到1。这是等价无穷小替换的分式形式应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时：
- $\\ln(1 + x) \\sim x$
- $\\sin x \\sim x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\ln(1 + x)}{\\sin x} = \\lim\\limits_{x \\to 0} \\frac{x}{x} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "等价无穷小替换"
},

{
  id: 64,
  type: "等价无穷小",
  title: "平方形式",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin^2 x}{x^2}$",
  essence: "这道题考查等价无穷小替换的平方形式应用。当 $x \\to 0$ 时，$\\sin x \\sim x$，所以 $\\sin^2 x \\sim x^2$，可以直接将 $\\sin^2 x$ 替换为 $x^2$，然后化简计算得到1。这是等价无穷小替换的平方形式应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时，$\\sin x \\sim x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin^2 x}{x^2} = \\lim\\limits_{x \\to 0} \\frac{(x)^2}{x^2} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "等价无穷小替换"
},

{
  id: 65,
  type: "等价无穷小",
  title: "复合形式1",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{\\ln(1 + x)}$",
  essence: "这道题考查等价无穷小替换的复合形式应用。当 $x \\to 0$ 时，$e^x-1 \\sim x$，$\\ln(1+x) \\sim x$，可以直接将 $e^x-1$ 和 $\\ln(1+x)$ 都替换为 $x$，然后化简计算得到1。这是等价无穷小替换的复合形式应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时：
- $e^x - 1 \\sim x$
- $\\ln(1 + x) \\sim x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{\\ln(1 + x)} = \\lim\\limits_{x \\to 0} \\frac{x}{x} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "等价无穷小替换"
},

{
  id: 66,
  type: "等价无穷小",
  title: "复合形式2",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{1 - \\cos x}{x \\sin x}$",
  essence: "这道题考查等价无穷小替换的复合形式应用。当 $x \\to 0$ 时，$1-\\cos x \\sim \\frac{x^2}{2}$，$\\sin x \\sim x$，可以直接将 $1-\\cos x$ 和 $\\sin x$ 都替换为等价函数，然后化简计算得到 $\\frac{1}{2}$。这是等价无穷小替换的复合形式应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时：
- $1 - \\cos x \\sim \\frac{x^2}{2}$
- $\\sin x \\sim x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{1 - \\cos x}{x \\sin x} = \\lim\\limits_{x \\to 0} \\frac{\\frac{x^2}{2}}{x \\cdot x} = \\frac{1}{2}$$`,
  answer: "$\\frac{1}{2}$",
  difficulty: "medium",
  category: "等价无穷小",
  method: "等价无穷小替换"
},


{
      id: 67,
  type: "等价无穷小",
  title: "综合应用",
  question: "计算 $\\lim\\limits_{x \\to 0} \\frac{\\sin x + \\tan x}{2x}$",
  essence: "这道题考查等价无穷小替换的综合应用。当 $x \\to 0$ 时，$\\sin x \\sim x$，$\\tan x \\sim x$，可以直接将 $\\sin x$ 和 $\\tan x$ 都替换为 $x$，然后化简计算得到1。这是等价无穷小替换的综合应用。",
  explanation: `<strong>等价无穷小：</strong>
当 $x \\to 0$ 时：
- $\\sin x \\sim x$
- $\\tan x \\sim x$

<strong>代入计算：</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin x + \\tan x}{2x} = \\lim\\limits_{x \\to 0} \\frac{x + x}{2x} = \\lim\\limits_{x \\to 0} \\frac{2x}{2x} = 1$$`,
  answer: "1",
  difficulty: "easy",
  category: "等价无穷小",
  method: "等价无穷小替换"
},
{
    id: 68,
  type: "连续性判断",
  title: "连续点判断",
  question: "判断函数$f(x) = x^2 + 1$在$x = 1$处是否连续",
  essence: "这道题考查函数连续性的判断。需要检查连续性三要素：函数值存在、极限存在、极限值等于函数值。对于多项式函数，通常直接计算函数值和极限值进行比较。",
  explanation: `<strong>连续性三要素：</strong>
1. $f(1) = 1^2 + 1 = 2$（函数值存在）
2. $\\lim\\limits_{x \\to 1} f(x) = \\lim\\limits_{x \\to 1} (x^2 + 1) = 2$（极限存在）
3. 极限值 = 函数值 = 2

<strong>结论：</strong>函数在$x = 1$处连续`,
  answer: "连续",
  difficulty: "easy",
  category: "连续性与间断点",
  method: "连续性判断"
},

{
  id: 69,
  type: "间断点判断",
  title: "可去间断点",
  question: "判断函数$f(x) = \\frac{x^2 - 1}{x - 1}$在$x = 1$处的间断类型",
  essence: "这道题考查间断点类型的判断。需要先化简函数，计算极限，然后根据极限是否存在以及函数值是否定义来判断间断点类型。当极限存在但函数无定义时，是可去间断点。",
  explanation: `<strong>第一步：函数在$x = 1$处无定义</strong>

<strong>第二步：计算极限</strong>
$$\\lim\\limits_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\lim\\limits_{x \\to 1} \\frac{(x-1)(x+1)}{x - 1} = \\lim\\limits_{x \\to 1} (x+1) = 2$$

<strong>第三步：判断</strong>
极限存在但函数无定义，是可去间断点`,
  answer: "可去间断点",
  difficulty: "easy",
  category: "连续性与间断点",
  method: "间断点分类"
},

{
  id: 70,
  type: "间断点判断",
  title: "跳跃间断点",
  question: "判断函数$f(x) = \\begin{cases} x + 1, & x < 0 \\\\ 2x, & x \\geq 0 \\end{cases}$在$x = 0$处的连续性",
  essence: "这道题考查分段函数间断点类型的判断。需要分别计算左极限和右极限，然后比较它们是否相等。当左右极限存在但不相等时，是跳跃间断点。",
  explanation: `<strong>第一步：计算左极限</strong>
$$\\lim\\limits_{x \\to 0^-} f(x) = \\lim\\limits_{x \\to 0^-} (x + 1) = 1$$

<strong>第二步：计算右极限</strong>
$$\\lim\\limits_{x \\to 0^+} f(x) = \\lim\\limits_{x \\to 0^+} 2x = 0$$

<strong>第三步：函数值</strong>
$$f(0) = 2(0) = 0$$

<strong>第四步：判断</strong>
左右极限不相等，是跳跃间断点`,
  answer: "跳跃间断点",
  difficulty: "medium",
  category: "连续性与间断点",
  method: "间断点分类"
},


{
  id: 71,
  type: "间断点判断",
  title: "无穷间断点",
  question: "判断函数$f(x) = \\frac{1}{x}$在$x = 0$处的间断类型",
  essence: "这道题考查间断点类型的判断。需要计算左极限和右极限，当极限为无穷大时，是第二类间断点（无穷间断点）。这是间断点分类的典型例子。",
  explanation: `<strong>第一步：函数在$x = 0$处无定义</strong>

<strong>第二步：计算极限</strong>
$$\\lim\\limits_{x \\to 0^+} \\frac{1}{x} = +\\infty$$
$$\\lim\\limits_{x \\to 0^-} \\frac{1}{x} = -\\infty$$

<strong>第三步：判断</strong>
极限为无穷大，是第二类间断点（无穷间断点）`,
  answer: "无穷间断点",
  difficulty: "easy",
  category: "连续性与间断点",
  method: "间断点分类"
},

{
  id: 72,
  type: "连续区间",
  title: "确定连续区间",
  question: "确定函数$f(x) = \\frac{x + 1}{x - 2}$的连续区间",
  essence: "这道题考查初等函数连续区间的确定。有理函数在其定义域内连续，需要找出使分母为0的点（间断点），然后确定连续区间。这是连续性问题的典型解法。",
  explanation: `<strong>分析：</strong>
有理函数在其定义域内连续

<strong>找间断点：</strong>
分母为0时：$x - 2 = 0$，即$x = 2$

<strong>连续区间：</strong>
$(-\\infty, 2) \\cup (2, +\\infty)$`,
  answer: "$(-\\infty, 2) \\cup (2, +\\infty)$",
  difficulty: "easy",
  category: "连续性与间断点",
  method: "连续区间"
},

{
    id: 73,
  type: "分段函数连续性",
  title: "分段函数连续",
  question: "设$f(x) = \\begin{cases} \\frac{\\sin x}{x}, & x \\neq 0 \\\\ 1, & x = 0 \\end{cases}$，判断$f(x)$在$x = 0$处是否连续",
  essence: "这道题考查分段函数连续性的判断。需要比较函数值和极限值是否相等。对于分段函数，特别要注意在分段点处的连续性判断，通常需要计算极限并与函数值比较。",
  explanation: `<strong>第一步：函数值</strong>
$f(0) = 1$

<strong>第二步：极限</strong>
$$\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = 1$$（第一重要极限）

<strong>第三步：比较</strong>
极限值 = 函数值 = 1

<strong>结论：</strong>函数在$x = 0$处连续`,
  answer: "连续",
  difficulty: "medium",
  category: "连续性与间断点",
  method: "分段函数连续性"
},


{
      id: 74,
  type: "初等函数连续性",
  title: "有理函数连续性",
  question: "函数$f(x) = \\frac{x^2 + 1}{x^2 - 4}$的连续区间是什么？",
  essence: "这道题考查有理函数连续区间的确定。有理函数在分母不为0的点连续，需要找出使分母为0的点（间断点），然后确定连续区间。这是初等函数连续性问题的典型解法。",
  explanation: `<strong>分析：</strong>
有理函数在分母不为0的点连续

<strong>找间断点：</strong>
$x^2 - 4 = 0$
$(x - 2)(x + 2) = 0$
$x = 2$或$x = -2$

<strong>连续区间：</strong>
$(-\\infty, -2) \\cup (-2, 2) \\cup (2, +\\infty)$`,
  answer: "$(-\\infty, -2) \\cup (-2, 2) \\cup (2, +\\infty)$",
  difficulty: "easy",
  category: "初等函数连续性",
  method: "有理函数连续性"
},

{
  id: 75,
  type: "初等函数连续性",
  title: "三角函数连续性",
  question: "函数$f(x) = \\sin x + \\cos x$的连续区间",
  essence: "这道题考查三角函数连续性的判断。基本三角函数sin x和cos x在实数域上连续，两个连续函数的和仍然连续。这是初等函数连续性问题的典型解法。",
  explanation: `<strong>定理：</strong>
基本三角函数$\\sin x$和$\\cos x$在$\\mathbb{R}$上连续

<strong>结论：</strong>
两个连续函数的和仍然连续
所以$f(x) = \\sin x + \\cos x$在$(-\\infty, +\\infty)$上连续`,
  answer: "$(-\\infty, +\\infty)$",
  difficulty: "easy",
  category: "初等函数连续性",
  method: "三角函数连续性"
},

{
  id: 76,
  type: "初等函数连续性",
  title: "指数函数连续性",
  question: "函数$f(x) = e^x$的连续区间",
  essence: "这道题考查指数函数连续性的判断。指数函数e^x在整个实数域上连续，这是基本初等函数连续性的典型例子。",
  explanation: `<strong>定理：</strong>
指数函数$e^x$在整个实数域上连续

<strong>结论：</strong>
$f(x) = e^x$在$(-\\infty, +\\infty)$上连续`,
  answer: "$(-\\infty, +\\infty)$",
  difficulty: "easy",
  category: "初等函数连续性",
  method: "指数函数连续性"
},

{
  id: 77,
  type: "初等函数连续性",
  title: "对数函数连续性",
  question: "函数$f(x) = \\ln x$的连续区间",
  essence: "这道题考查对数函数连续性的判断。对数函数ln x在其定义域(0,+∞)内连续，这是基本初等函数连续性的典型例子。",
  explanation: `<strong>定义域：</strong>
$\\ln x$要求$x > 0$

<strong>连续性：</strong>
对数函数在其定义域内连续

<strong>结论：</strong>
$f(x) = \\ln x$在$(0, +\\infty)$上连续`,
  answer: "$(0, +\\infty)$",
  difficulty: "easy",
  category: "初等函数连续性",
  method: "对数函数连续性"
},

{
    id: 78,
  type: "初等函数连续性",
  title: "根式函数连续性",
  question: "函数$f(x) = \\sqrt{x}$的连续区间",
  essence: "这道题考查根式函数连续性的判断。根式函数√x在其定义域[0,+∞)内连续，这是基本初等函数连续性的典型例子。",
  explanation: `<strong>定义域：</strong>
$\\sqrt{x}$要求$x \\geq 0$

<strong>连续性：</strong>
根式函数在其定义域内连续

<strong>结论：</strong>
$f(x) = \\sqrt{x}$在$[0, +\\infty)$上连续`,
  answer: "$[0, +\\infty)$",
  difficulty: "easy",
  category: "初等函数连续性",
  method: "根式函数连续性"
}


];
