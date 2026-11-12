# OCODEJS Learning Platform

Nền tảng học lập trình và bán khóa học OCODEJS — bản giao diện frontend responsive được triển khai từ sitemap/wireframe trong README gốc.

## Chạy local
Mở `index.html` trực tiếp hoặc chạy static server:
```bash
npx serve .
```

## Triển khai
- Cloudflare Pages Preview dùng build command `node scripts/build-site.mjs`, output `dist/`; build chỉ xuất bản `index.html`, `studio.html`, app-shell fallback và metadata preview.
- Preview có `_redirects` để hỗ trợ refresh các SPA route và `_headers` đặt `X-Robots-Tag: noindex, nofollow` để tránh index bản thử nghiệm.
- GitHub Pages dùng workflow `.github/workflows/pages.yml` làm pipeline tự động duy nhất khi có thay đổi trên `main`. Các workflow `static.yml`, `jekyll-gh-pages.yml` và `jekyll.yml` là legacy/manual-only để tránh nhiều workflow ghi đè cùng Pages deployment.
- Bản hiện tại chỉ deploy Preview; không tự bật domain riêng hoặc Production.

## Phạm vi hiện tại
- Homepage, catalog/search/filter, category, course detail, cart (localStorage), checkout demo.
- Auth/contact forms ở chế độ UI demo; chưa gửi dữ liệu hoặc xác thực thật.
- Student area, learning workspace, FAQ, blog placeholder, legal pages, 404.
- Responsive desktop/mobile, không dùng bo góc cho controls.

## Cần tích hợp trước production
Backend/API, database, authentication/OAuth, payment gateway, video hosting, email, CMS/blog, analytics, legal review và bảo vệ dữ liệu. Không có giao dịch thật nào được xử lý trong bản preview này.

## Source specification
Xem README lịch sử và sitemap/wireframe ban đầu trong repository.

## Build validation

Run `node scripts/build-site.mjs` to validate required HTML metadata, Vietnamese document language, responsive viewport, and square-corner controls, then create the static deployment artifact in `dist/`.
