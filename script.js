let canvasColor = "#ffffff";
let canvasWidth = 1920;
let canvasHeight = 1080;
let grainIntensity = 0;
let exportFormat = "png";

const colorPicker = document.getElementById('color-picker');
const hexInput = document.getElementById('hex-input');
const customWidth = document.getElementById('custom-width');
const customHeight = document.getElementById('custom-height');
const visualCanvasView = document.getElementById('visual-canvas-view');
const grainOverlayLayer = document.getElementById('grain-overlay-layer');

// ==========================================
// 1. PROGRAMMATIC SEO SYSTEM ROUTER
// ==========================================
// ==========================================
// 1. PROGRAMMATIC SEO SYSTEM ROUTER
// ==========================================
window.onload = function () {
    // 1. Check for incoming pSEO query parameters first
    parseUrlParameters();

    // 2. FIXED: Explicitly sync the input fields with our baseline state variables
    colorPicker.value = canvasColor;
    hexInput.value = canvasColor;
    customWidth.value = canvasWidth;
    customHeight.value = canvasHeight;

    // 3. Force render the visual canvas color backdrop immediately on page load
    syncUIWorkspace();
};

function parseUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const colorParam = urlParams.get('color');
    const sizeParam = urlParams.get('size');

    // Handle incoming programmatic color hooks
    if (colorParam) {
        const swatches = {
            'white': '#ffffff',
            'black': '#000000',
            'green': '#00ff00',
            'blue': '#0000ff',
            'gray': '#808080'
        };
        if (swatches[colorParam]) {
            canvasColor = swatches[colorParam];
            updateActiveSwatchHighlight(canvasColor);
        }
    }

    // Handle incoming programmatic preset hooks
    if (sizeParam) {
        if (sizeParam === 'shorts' || sizeParam === 'vertical') {
            canvasWidth = 1080;
            canvasHeight = 1920;
            updateActivePresetHighlight('Shorts / TikTok');
        } else if (sizeParam === 'instagram' || sizeParam === 'square') {
            canvasWidth = 1080;
            canvasHeight = 1080;
            updateActivePresetHighlight('1:1 Square');
        } else if (sizeParam === 'og' || sizeParam === 'link') {
            canvasWidth = 1200;
            canvasHeight = 630;
            updateActivePresetHighlight('SEO Link Preview');
        }
    }

    // Dynamic Header SEO Copy Generation Injection
    if (colorParam || sizeParam) {
        const colorLabel = colorParam ? colorParam.charAt(0).toUpperCase() + colorParam.slice(1) : "";
        const sizeLabel = sizeParam === 'shorts' ? "Vertical (9:16)" : "Studio Backdrop";

        document.getElementById('seo-title').innerText = `Download Free ${colorLabel} Solid Canvas Background Image (${canvasWidth}x${canvasHeight})`;
        document.getElementById('main-heading').innerText = `📄 Free ${colorLabel} Canvas`;
        document.getElementById('sub-heading').innerText = `Your optimized client-side ${colorLabel} background canvas block is generated below. Click download to save your production asset.`;
    }
}

// ==========================================
// 2. COLOR DISPATCH HANDLERS
// ==========================================
function handleColorPicker(val) {
    canvasColor = val;
    hexInput.value = val;
    updateActiveSwatchHighlight(val);
    syncUIWorkspace();
}

function handleHexInput(val) {
    if (val.length === 7 && val.startsWith('#')) {
        canvasColor = val;
        colorPicker.value = val;
        updateActiveSwatchHighlight(val);
        syncUIWorkspace();
    }
}

function selectSwatch(hex, element) {
    canvasColor = hex;
    colorPicker.value = hex;
    hexInput.value = hex;

    document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
    element.classList.add('active');

    syncUIWorkspace();
}

function updateActiveSwatchHighlight(currentHex) {
    document.querySelectorAll('.swatch-btn').forEach(btn => {
        // Convert to clean comparison values
        const btnBg = btn.style.backgroundColor;
        if (btnBg) {
            btn.classList.remove('active');
        }
    });
}

// ==========================================
// 3. RATIOS & DIMENSION HANDLERS
// ==========================================
function applyPreset(w, h, labelText, element) {
    canvasWidth = w;
    canvasHeight = h;
    customWidth.value = w;
    customHeight.value = h;

    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
    element.classList.add('active');

    syncUIWorkspace();
}

function updateActivePresetHighlight(labelText) {
    document.querySelectorAll('.preset-btn').forEach(btn => {
        if (btn.innerText.includes(labelText)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function handleCustomDimensions() {
    canvasWidth = parseInt(customWidth.value) || 1920;
    canvasHeight = parseInt(customHeight.value) || 1080;

    // Drop preset highlight on raw values modification
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
    syncUIWorkspace();
}

// ==========================================
// 4. EFFECTS & INTERACTIVE WORKSPACE ENGINE
// ==========================================
function updateGrainEffect(val) {
    grainIntensity = val;
    document.getElementById('grain-val').innerText = `${Math.round((val / 15) * 100)}%`;
    syncUIWorkspace();
}

function setExportFormat(fmt, element) {
    exportFormat = fmt;
    document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
    element.classList.add('active');
}

function syncUIWorkspace() {
    // 1. Map color canvas attributes dynamically
    visualCanvasView.style.backgroundColor = canvasColor;

    // 2. Set aspect-ratio cleanly (letting CSS manage the physical structural widths)
    visualCanvasView.style.aspectRatio = `${canvasWidth} / ${canvasHeight}`;

    // 3. Refresh grain density presentation matrices
    grainOverlayLayer.style.opacity = grainIntensity / 100;
}

// ==========================================
// 5. VECTOR CANVAS GENERATION & EXPORT ENGINE
// ==========================================
function exportCanvasAsset() {
    const canvas = document.getElementById('render-canvas');
    const ctx = canvas.getContext('2d');

    // Establish absolute full scale vector dimension parameters
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 1. Paint Solid Backdrop Base Block
    ctx.fillStyle = canvasColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Synthesize Texture Overlays if slider has active value weights
    if (grainIntensity > 0) {
        // Build image frame context to scale noise layer cleanly across custom aspect outputs
        ctx.save();
        ctx.globalAlpha = grainIntensity / 100;
        ctx.fillStyle = ctx.createPattern(createNoisePattern(), 'repeat');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    }

    // 3. Initiate Instant Local System Download Action Link
    const ext = exportFormat === 'jpeg' ? 'jpg' : 'png';
    const downloadLink = document.createElement('a');
    downloadLink.download = `solid_color_canvas_${canvasWidth}x${canvasHeight}.${ext}`;
    downloadLink.href = canvas.toDataURL(`image/${exportFormat}`, exportFormat === 'jpeg' ? 0.92 : undefined);
    downloadLink.click();
}

// Helper to compile offscreen pattern chunks
function createNoisePattern() {
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 128;
    pCanvas.height = 128;
    const pCtx = pCanvas.getContext('2d');
    const imgData = pCtx.createImageData(128, 128);

    for (let i = 0; i < imgData.data.length; i += 4) {
        // High density random seed scattering logic
        const noise = Math.floor(Math.random() * 255);
        imgData.data[i] = noise;
        imgData.data[i + 1] = noise;
        imgData.data[i + 2] = noise;
        imgData.data[i + 3] = 255;
    }
    pCtx.putImageData(imgData, 0, 0);
    return pCanvas;
}