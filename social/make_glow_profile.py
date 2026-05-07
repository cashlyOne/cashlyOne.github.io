from PIL import Image, ImageDraw, ImageFont, ImageFilter

BASE = '/Users/mateoherbig/Downloads/banking/social/twitter-profile.jpg'
OUT  = '/Users/mateoherbig/Downloads/banking/social/twitter-profile-glow.jpg'

base = Image.open(BASE).convert('RGBA')
W, H = base.size  # 800x800

BADGE = 300
RADIUS = int(BADGE * 0.24)
LEFT = (W - BADGE) // 2
TOP  = (H - BADGE) // 2
RIGHT = LEFT + BADGE
BOTTOM = TOP + BADGE

# 1) Outer glow — soft warm halo around the badge
glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
GP = 70
gd.rounded_rectangle(
    (LEFT - GP, TOP - GP, RIGHT + GP, BOTTOM + GP),
    radius=RADIUS + GP,
    fill=(255, 248, 232, 130),
)
glow = glow.filter(ImageFilter.GaussianBlur(45))

# 2) Drop shadow under the badge
shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
sd.rounded_rectangle(
    (LEFT, TOP + 14, RIGHT, BOTTOM + 34),
    radius=RADIUS,
    fill=(10, 14, 20, 110),
)
shadow = shadow.filter(ImageFilter.GaussianBlur(22))

# 3) The badge itself: dark gradient + cream H
strip = Image.new('RGB', (1, BADGE))
for y in range(BADGE):
    t = y / BADGE
    r = int(0x1a + (0x0a - 0x1a) * t)
    g = int(0x20 + (0x0e - 0x20) * t)
    b = int(0x30 + (0x14 - 0x30) * t)
    strip.putpixel((0, y), (r, g, b))
grad = strip.resize((BADGE, BADGE))

mask = Image.new('L', (BADGE, BADGE), 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, BADGE - 1, BADGE - 1), radius=RADIUS, fill=255)

badge = Image.new('RGBA', (BADGE, BADGE), (0, 0, 0, 0))
badge.paste(grad, (0, 0), mask)

# Inner top highlight — 1px specular line near the top edge
hi = Image.new('RGBA', (BADGE, BADGE), (0, 0, 0, 0))
hd = ImageDraw.Draw(hi)
hd.rounded_rectangle(
    (2, 2, BADGE - 3, BADGE - 3),
    radius=RADIUS - 1,
    outline=(255, 255, 255, 60),
    width=1,
)
badge = Image.alpha_composite(badge, hi)

# 4) Letter H — drawn as three geometric rectangles for a clean bold mark
td = ImageDraw.Draw(badge)
H_W = int(BADGE * 0.46)
H_H = int(BADGE * 0.56)
BAR = int(H_W * 0.22)
H_LEFT = (BADGE - H_W) // 2
H_TOP = (BADGE - H_H) // 2 - 2
CREAM = (250, 247, 240, 255)
td.rectangle((H_LEFT, H_TOP, H_LEFT + BAR, H_TOP + H_H), fill=CREAM)
td.rectangle((H_LEFT + H_W - BAR, H_TOP, H_LEFT + H_W, H_TOP + H_H), fill=CREAM)
td.rectangle((H_LEFT, H_TOP + (H_H - BAR) // 2, H_LEFT + H_W, H_TOP + (H_H + BAR) // 2), fill=CREAM)

# 5) Composite all layers
result = Image.alpha_composite(base, glow)
result = Image.alpha_composite(result, shadow)
result.paste(badge, (LEFT, TOP), badge)

result.convert('RGB').save(OUT, quality=92)
print('saved', OUT)
