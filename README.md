# muhammet-blog

Personal technical blog — lives at [blog.yldzmuhammed.com](https://blog.yldzmuhammed.com)

## Structure

```
/
├── index.html          # Blog home, lists all posts
├── posts/              # Individual post pages
│   └── what-is-iot.html
├── CNAME               # Custom domain config for GitHub Pages
└── README.md
```

## Adding a new post

1. Create a new `.html` file in `/posts/` using an existing post as a template
2. Add the post entry to `index.html` in the `#postList` div
3. Update the `data-series` attribute on the post item so filters work
4. Commit and push — GitHub Pages publishes automatically

## GitHub Pages setup (one time)

1. Go to your repo Settings → Pages
2. Set source to `main` branch, root folder
3. Your CNAME file handles the custom domain automatically
4. In your domain registrar (wherever yldzmuhammed.com is managed), add a CNAME DNS record:
   - Name: `blog`
   - Value: `yldzmuhammed.github.io`

## Series tags (for filters)

| data-series value | Label |
|---|---|
| `iot-fundamentals` | IoT Fundamentals |
| `lorawan` | LoRaWAN |
| `ble` | BLE |
| `wifi` | Wi-Fi |
| `lte` | LTE |
| `zigbee` | Zigbee |
| `comparison` | Comparisons |
| `pcb` | PCB Design |
| `firmware` | Firmware |
| `power` | Power Optimization |
| `ameza` | Ameza |
| `opinion` | Opinion |

## Content log

| Date | Post | LinkedIn | Notes |
|---|---|---|---|
| Mar 18, 2026 | What is IoT really? | [link] | First post |
