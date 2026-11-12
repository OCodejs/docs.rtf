# OCODEJS Learning Platform

Nền tảng học lập trình và bán khóa học OCODEJS — bản giao diện frontend responsive được triển khai từ sitemap/wireframe trong README gốc.

## Preview
- Cloudflare Pages staging: https://ocodejs-docs-rtf-staging.pages.dev
- Git branch: `feat/cloudflare-pages-staging-deploy`
- Project chỉ nhận Preview từ nhánh tính năng; Production deployment từ `main` đang tắt.
- Preview trả `X-Robots-Tag: noindex, nofollow` và không gắn custom domain.

## Chạy local
Mở `index.html` trực tiếp hoặc chạy static server:
```bash
npm run build
npx serve dist
```

## Triển khai
- Build command: `npm run build`; output directory: `dist/`.
- Build chỉ xuất bản `index.html`, `studio.html`, app-shell fallback, SPA redirects và metadata deployment.
- `_redirects` hỗ trợ refresh các SPA route; `404.html` dùng app shell để router xử lý route trực tiếp.
- `_headers` ngăn index bản preview.
- GitHub Pages dùng workflow `.github/workflows/pages.yml` làm pipeline tự động duy nhất khi có thay đổi trên `main`. Các workflow `static.yml`, `jekyll-gh-pages.yml` và `jekyll.yml` là legacy/manual-only để tránh nhiều workflow ghi đè cùng Pages deployment.
- Không tự bật domain riêng hoặc Production trong cấu hình staging.

## Phạm vi hiện tại
- Homepage, catalog/search/filter, category, course detail, cart (localStorage), checkout demo.
- Auth/contact forms ở chế độ UI demo; chưa gửi dữ liệu hoặc xác thực thật.
- Student area, learning workspace, FAQ, blog placeholder, legal pages.
- Responsive desktop/mobile, controls vuông góc.

## Cần tích hợp trước production
Backend/API, database, authentication/OAuth, payment gateway, video hosting, email, CMS/blog, analytics, legal review và bảo vệ dữ liệu. Không có giao dịch thật nào được xử lý trong bản preview này.

## Source specification
Xem README lịch sử và sitemap/wireframe ban đầu trong repository.

## Build validation
Run `npm run build` to validate HTML metadata, Vietnamese document language, responsive viewport, and square-corner controls, then create the deployment artifact in `dist/`.
