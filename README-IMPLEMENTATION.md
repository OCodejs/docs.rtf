# OCODEJS Learning Platform

Nền tảng học lập trình và bán khóa học OCODEJS — bản giao diện frontend responsive được triển khai từ sitemap/wireframe trong README gốc.

## Chạy local
Mở `index.html` trực tiếp hoặc chạy static server:
```bash
npx serve .
```

## Triển khai GitHub Pages
Workflow `.github/workflows/pages.yml` tự động deploy khi có thay đổi trên nhánh `main`. Trong GitHub, vào **Settings → Pages → Build and deployment → Source → GitHub Actions** nếu Pages chưa được bật.

## Phạm vi hiện tại
- Homepage, catalog/search/filter, category, course detail, cart (localStorage), checkout demo.
- Auth/contact forms ở chế độ UI demo; chưa gửi dữ liệu hoặc xác thực thật.
- Student area, learning workspace, FAQ, blog placeholder, legal pages, 404.
- Responsive desktop/mobile, không dùng bo góc cho controls.

## Cần tích hợp trước production
Backend/API, database, authentication/OAuth, payment gateway, video hosting, email, CMS/blog, analytics, legal review và bảo vệ dữ liệu. Không có giao dịch thật nào được xử lý trong bản preview này.

## Source specification
Xem README lịch sử và sitemap/wireframe ban đầu trong repository.
