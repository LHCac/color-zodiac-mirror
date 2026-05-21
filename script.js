/**
 * 星彩心鏡 Color Zodiac Mirror
 * Interactive Emotional Color Quiz
 */

const quizData = {
      questions: [
          {
              id: 1,
              title: "此刻，哪個顏色最吸引你？",
              type: "orbs",
              options: [
                  { label: "紅色", color: "#e74c3c", scores: { red: 2 } },
                  { label: "藍色", color: "#3498db", scores: { blue: 2 } },
                  { label: "黃色", color: "#f1c40f", scores: { yellow: 2 } },
                  { label: "綠色", color: "#2ecc71", scores: { green: 2 } },
                  { label: "紫色", color: "#9b59b6", scores: { purple: 2 } },
                  { label: "黑色", color: "#2c3e50", scores: { black: 2 } }
              ]
          },
          {
              id: 2,
              title: "如果眼前有幾扇門，你最想走進哪個房間？",
              type: "doors",
              options: [
                  { label: "紅色房間：熱情與行動", color: "#ff4d4d", scores: { red: 2 } },
                  { label: "藍色房間：冷靜與思考", color: "#4d79ff", scores: { blue: 2 } },
                  { label: "綠色房間：療癒與平衡", color: "#4dff88", scores: { green: 2 } },
                  { label: "紫色房間：神秘與直覺", color: "#d24dff", scores: { purple: 2 } }
              ]
          },
          {
              id: 3,
              title: "如果今天的天空由你決定，你會選哪一種顏色？",
              type: "sky",
              options: [
                  { label: "淡藍色天空", color: "#aaddff", scores: { blue: 2 } },
                  { label: "橘黃色天空", color: "#ffaa33", scores: { yellow: 2, red: 1 } },
                  { label: "粉紅色天空", color: "#ffaaaa", scores: { purple: 1, red: 1, yellow: 1 } },
                  { label: "深紫色天空", color: "#5522aa", scores: { purple: 2 } },
                  { label: "灰色天空", color: "#777777", scores: { black: 2 } }
              ]
          },
          {
              id: 4,
              title: "哪一組配色最像現在的你？",
              type: "palette",
              options: [
                  { label: "紅 + 黃：活力與表現", colors: ["#ff4d4d", "#ffd11a"], scores: { red: 1, yellow: 2 } },
                  { label: "藍 + 白：理性與秩序", colors: ["#4d79ff", "#ffffff"], scores: { blue: 2 } },
                  { label: "綠 + 棕：穩定與安全感", colors: ["#2eb82e", "#804000"], scores: { green: 2 } },
                  { label: "紫 + 黑：直覺與個人風格", colors: ["#9933ff", "#1a1a1a"], scores: { purple: 1, black: 2 } }
              ]
          }
      ],
      results: {
          red: {
              title: "紅色行動能量",
              color: "#e74c3c",
              keywords: ["熱情", "行動力", "直接"],
              analysis: "你現在可能正處於想突破、想前進、想表達自己的狀態。你內在的能量偏向外放，對行動和改變有明顯的渴望。",
              reminder: "勇敢很好，但也別忘了留意自己的節奏。",
              palette: ["#ff4d4d", "#ff944d", "#ffd11a"],
              paletteLabels: "紅色、橘色、金色"
          },
          blue: {
              title: "藍色觀察能量",
              color: "#3498db",
              keywords: ["冷靜", "理性", "沉穩"],
              analysis: "你此刻可能更需要安靜、整理思緒，傾向先觀察再行動。你重視內在秩序，也希望讓自己保持清楚與穩定。",
              reminder: "不要把感受都藏起來，適度表達會讓你更輕鬆。",
              palette: ["#3498db", "#ffffff", "#b8c1ec"],
              paletteLabels: "藍色、白色、灰藍色"
          },
          yellow: {
              title: "黃色創意能量",
              color: "#f1c40f",
              keywords: ["樂觀", "靈感", "活潑"],
              analysis: "你目前可能充滿點子，渴望新鮮感與快樂的交流。你對外界有好奇心，也希望把生活變得更有趣。",
              reminder: "把靈感慢慢整理成具體行動，會更有成就感。",
              palette: ["#f1c40f", "#ff944d", "#fff5cc"],
              paletteLabels: "黃色、橘黃色、奶油白"
          },
          green: {
              title: "綠色療癒能量",
              color: "#2ecc71",
              keywords: ["平衡", "溫和", "安心"],
              analysis: "你現在也許很重視內心平穩，渴望被理解與被安放。你希望生活節奏不要太急，也希望自己能慢慢恢復能量。",
              reminder: "給自己一點喘息空間，你不需要一直撐著。",
              palette: ["#2ecc71", "#f5f5dc", "#8b4513"],
              paletteLabels: "綠色、米色、棕色"
          },
          purple: {
              title: "紫色直覺能量",
              color: "#9b59b6",
              keywords: ["神秘", "感受力", "想像力"],
              analysis: "你最近可能更貼近內在世界，直覺與靈感都很活躍。你對感受、氛圍和想像有很高的敏銳度。",
              reminder: "相信自己的感受，也可以試著把想法說出來。",
              palette: ["#9b59b6", "#1a1a2e", "#c0c0c0"],
              paletteLabels: "紫色、深藍色、銀色"
          },
          black: {
              title: "黑色守護能量",
              color: "#2c3e50",
              keywords: ["界線", "自我保護", "深沉"],
              analysis: "你目前可能正在保留能量，希望與外界保持安全距離。你重視界線，也希望先保護好自己的內在狀態。",
              reminder: "保護自己很重要，但也別忘了讓值得的人靠近你。",
              palette: ["#000000", "#7f8c8d", "#4b0082"],
              paletteLabels: "黑色、灰色、深紫色"
          }
      }
  };
  
  class ColorZodiacGame {
      constructor() {
          this.currentStep = 0; // 0 is intro
          this.scores = { red: 0, blue: 0, yellow: 0, green: 0, purple: 0, black: 0 };
          this.isMuted = true;
          
          this.stage = document.getElementById('game-stage');
          this.soundBtn = document.getElementById('sound-toggle');
          this.soundIcon = document.getElementById('sound-icon');
          
          this.bgMusic = new Audio('bg_music.mp3');
          this.bgMusic.loop = true;
          this.bgMusic.volume = 0.4;
          
          this.clickSfx = new Audio('click_sound.mp3');
          this.revealSfx = new Audio('result_reveal.mp3');
          
          this.init();
      }
  
      init() {
          this.renderIntro();
          this.initStarfield();
          this.bindEvents();
      }
  
      bindEvents() {
          this.soundBtn.addEventListener('click', () => {
              this.isMuted = !this.isMuted;
              this.soundIcon.textContent = this.isMuted ? '🔈' : '🔊';
              if (this.isMuted) {
                  this.bgMusic.pause();
              } else {
                  this.bgMusic.play().catch(e => console.log("Audio play blocked by browser."));
              }
          });
      }
  
      playSound(audio) {
          if (!this.isMuted) {
              audio.currentTime = 0;
              audio.play().catch(e => {});
          }
      }
  
      renderIntro() {
          const html = `
              <div class="screen intro-screen">
                  <div class="zodiac-circle"></div>
                  <div class="intro-content">
                      <h1>星彩心鏡</h1>
                      <div class="subtitle">Color Zodiac Mirror</div>
                      <p class="intro-text">
                          透過你的色彩選擇，探索你此刻的情緒能量。<br>
                          深呼吸，讓我們開始這段心靈的調色旅程。
                      </p>
                      <button id="start-btn" class="cta-btn">開始測驗</button>
                  </div>
              </div>
          `;
          this.stage.innerHTML = html;
          document.getElementById('start-btn').onclick = () => {
              this.playSound(this.clickSfx);
              if (!this.isMuted) this.bgMusic.play().catch(e=>{});
              this.nextStep();
          };
      }
  
      nextStep() {
          const currentScreen = this.stage.querySelector('.screen');
          if (currentScreen) {
              currentScreen.classList.add('fade-out');
              setTimeout(() => {
                  this.currentStep++;
                  if (this.currentStep <= quizData.questions.length) {
                      this.renderQuestion(this.currentStep - 1);
                  } else {
                      this.renderResult();
                  }
              }, 500);
          } else {
              this.currentStep++;
              this.renderQuestion(0);
          }
      }
  
      renderQuestion(index) {
          const q = quizData.questions[index];
          let optionsHtml = '';
  
          if (q.type === 'orbs') {
              optionsHtml = `<div class="options-grid">
                  ${q.options.map((opt, i) => `
                      <div class="option-card" data-idx="${i}">
                          <div class="color-orb" style="background-color: ${opt.color}; box-shadow: 0 0 15px ${opt.color}66;"></div>
                          <span class="option-text">${opt.label}</span>
                      </div>
                  `).join('')}
              </div>`;
          } else if (q.type === 'doors') {
              optionsHtml = `<div class="doors-grid">
                  ${q.options.map((opt, i) => `
                      <div class="door-option" data-idx="${i}" style="color: ${opt.color};">
                          <div class="door-graphic" style="background: linear-gradient(to bottom, ${opt.color}aa, #111);"></div>
                          <span class="option-text">${opt.label}</span>
                      </div>
                  `).join('')}
              </div>`;
          } else if (q.type === 'sky') {
              optionsHtml = `<div class="sky-list">
                  ${q.options.map((opt, i) => `
                      <div class="sky-option" data-idx="${i}">
                          <div class="sky-preview" style="background: linear-gradient(to bottom, ${opt.color}, #fff);"></div>
                          <span class="option-text">${opt.label}</span>
                      </div>
                  `).join('')}
              </div>`;
          } else if (q.type === 'palette') {
              optionsHtml = `<div class="palette-grid">
                  ${q.options.map((opt, i) => `
                      <div class="palette-option" data-idx="${i}">
                          <span class="option-text">${opt.label}</span>
                          <div class="palette-colors">
                              ${opt.colors.map(c => `<div class="palette-color" style="background-color: ${c}"></div>`).join('')}
                          </div>
                      </div>
                  `).join('')}
              </div>`;
          }
  
          const html = `
              <div class="screen question-screen">
                  <div class="progress">第 ${q.id} 題 / 第 ${quizData.questions.length} 題</div>
                  <h2 class="question-title">${q.title}</h2>
                  ${optionsHtml}
              </div>
          `;
          this.stage.innerHTML = html;
  
          // Bind option clicks
          const options = this.stage.querySelectorAll('[data-idx]');
          options.forEach(opt => {
              opt.onclick = () => {
                  this.playSound(this.clickSfx);
                  const optIdx = opt.getAttribute('data-idx');
                  const selectedOpt = q.options[optIdx];
                  // Update scores
                  for (let key in selectedOpt.scores) {
                      this.scores[key] += selectedOpt.scores[key];
                  }
                  this.nextStep();
              };
          });
      }
  
      renderResult() {
          this.playSound(this.revealSfx);
          const resultKey = Object.keys(this.scores).reduce((a, b) => this.scores[a] >= this.scores[b] ? a : b);
          const result = quizData.results[resultKey];
  
          const html = `
              <div class="screen result-screen">
                  <div class="result-card" style="border-top: 4px solid ${result.color};">
                      <div class="result-header">你的情緒色彩結果</div>
                      <h1 class="result-title" style="color: ${result.color};">${result.title}</h1>
                      
                      <div class="keywords">
                          ${result.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}
                      </div>
  
                      <div class="result-analysis">
                          <span class="section-label">情緒分析</span>
                          <p class="result-text">${result.analysis}</p>
                      </div>
  
                      <div class="result-reminder">
                          <span class="section-label">當前提醒</span>
                          <p class="result-text">${result.reminder}</p>
                      </div>
  
                      <div class="result-palette">
                          <span class="section-label">建議配色</span>
                          <p class="result-text">${result.paletteLabels}</p>
                          <div class="palette-swatches">
                              ${result.palette.map(c => `<div class="swatch" style="background-color: ${c}"></div>`).join('')}
                          </div>
                      </div>
  
                      <button id="restart-btn" class="cta-btn restart-btn">重新測驗</button>
                  </div>
              </div>
          `;
          this.stage.innerHTML = html;
          
          document.getElementById('restart-btn').onclick = () => {
              this.playSound(this.clickSfx);
              this.resetGame();
          };
      }
  
      resetGame() {
          const currentScreen = this.stage.querySelector('.screen');
          currentScreen.classList.add('fade-out');
          setTimeout(() => {
              this.currentStep = 0;
              this.scores = { red: 0, blue: 0, yellow: 0, green: 0, purple: 0, black: 0 };
              this.renderIntro();
          }, 500);
      }
  
      initStarfield() {
          const canvas = document.getElementById('starfield');
          const ctx = canvas.getContext('2d');
          let width, height, stars = [];
  
          const resize = () => {
              width = canvas.width = window.innerWidth;
              height = canvas.height = window.innerHeight;
              initStars();
          };
  
          const initStars = () => {
              stars = [];
              const count = Math.floor((width * height) / 3000);
              for (let i = 0; i < count; i++) {
                  stars.push({
                      x: Math.random() * width,
                      y: Math.random() * height,
                      size: Math.random() * 2,
                      speed: Math.random() * 0.2,
                      opacity: Math.random()
                  });
              }
          };
  
          const draw = () => {
              ctx.clearRect(0, 0, width, height);
              stars.forEach(s => {
                  ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
                  ctx.beginPath();
                  ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                  ctx.fill();
  
                  s.y -= s.speed;
                  if (s.y < 0) s.y = height;
                  
                  // Twinkle
                  s.opacity += (Math.random() - 0.5) * 0.05;
                  if (s.opacity < 0.1) s.opacity = 0.1;
                  if (s.opacity > 0.8) s.opacity = 0.8;
              });
              requestAnimationFrame(draw);
          };
  
          window.addEventListener('resize', resize);
          resize();
          draw();
      }
  }
  
  // Start the app when window loads
  window.onload = () => {
      new ColorZodiacGame();
  };