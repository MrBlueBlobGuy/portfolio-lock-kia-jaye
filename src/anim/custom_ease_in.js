gsap.registerPlugin(CustomEase);

const k = 3.4;
const a = 0.6;
const b = 2.5;
const c = 2.05;

// Precompute curve
function buildEase(samples = 200) {
  const values = [];
  
  // Precompute min & max for normalization
  const f = x =>
    Math.sin(k / (a * (x - c) ** 2 + b * (x - c) + k));
  
  const min = f(0);
  const max = f(1);

  for (let i = 0; i <= samples; i++) {
    const x = i / samples;
    const raw = f(x);
    const normalized = (raw - min) / (max - min);
    values.push(normalized);
  }

  return values;
}

const easeData = buildEase(300); // 300 samples = very smooth

CustomEase.create("fastEase", easeData);