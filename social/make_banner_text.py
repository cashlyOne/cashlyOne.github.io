from PIL import Image, ImageDraw, ImageFont, ImageFilter

BASE = '/Users/mateoherbig/Downloads/banking/social/twitter-banner.jpg'
OUT  = '/Users/mateoherbig/Downloads/banking/social/twitter-banner-text.jpg'

base = Image.open(BASE).convert('RGBA')
W, H = base.size  # 1500, 500

DIDOT = '/System/Library/Fonts/Supplemental/Didot.ttc'
GEORGIA_R = '/System/Library/Fonts/Supplemental/Georgia.ttf'
GEORGIA_I = '/System/Library/Fonts/Supplemental/Georgia Italic.ttf'

FS = 78

def load(path, size, idx=None):
    try:
        return ImageFont.truetype(path, size, index=idx) if idx is not None else ImageFont.truetype(path, size)
    except Exception:
        return None

# Try Didot first (Instrument Serif look-alike), fall back to Georgia
font_regular = load(DIDOT, FS, 0) or load(GEORGIA_R, FS)
font_italic  = load(DIDOT, FS, 1) or load(GEORGIA_I, FS)

text1 = 'The dollar account'
text2 = 'that opens in 10 seconds.'

INK = (16, 24, 36, 235)  # ~rgba(20,28,38,0.92)
WHITE_GLOW  = (255, 255, 255, 110)
DARK_SHADOW = (20, 30, 50, 120)

def render_line(canvas, xy, text, font):
    # Soft dark drop shadow
    s1 = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
    ImageDraw.Draw(s1).text((xy[0], xy[1] + 6), text, font=font, fill=DARK_SHADOW)
    s1 = s1.filter(ImageFilter.GaussianBlur(20))
    # White glow halo for legibility on dark photo regions
    s2 = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
    ImageDraw.Draw(s2).text(xy, text, font=font, fill=WHITE_GLOW)
    s2 = s2.filter(ImageFilter.GaussianBlur(10))
    # Crisp ink text
    t = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
    ImageDraw.Draw(t).text(xy, text, font=font, fill=INK)
    canvas = Image.alpha_composite(canvas, s1)
    canvas = Image.alpha_composite(canvas, s2)
    canvas = Image.alpha_composite(canvas, t)
    return canvas

# Measure
m = ImageDraw.Draw(base)
b1 = m.textbbox((0, 0), text1, font=font_regular)
b2 = m.textbbox((0, 0), text2, font=font_italic)
w1, h1 = b1[2] - b1[0], b1[3] - b1[1]
w2, h2 = b2[2] - b2[0], b2[3] - b2[1]

LINE_GAP = -10  # tight (matches website lineHeight 1.0)
total_h = h1 + h2 + LINE_GAP
y_start = (H - total_h) // 2 - 14

x1 = (W - w1) // 2 - b1[0]
x2 = (W - w2) // 2 - b2[0]
y1 = y_start - b1[1]
y2 = y_start + h1 + LINE_GAP - b2[1]

base = render_line(base, (x1, y1), text1, font_regular)
base = render_line(base, (x2, y2), text2, font_italic)

base.convert('RGB').save(OUT, quality=92)
print('saved', OUT)
