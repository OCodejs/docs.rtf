Chào bạn! Dưới đây là bản mô tả thiết kế tổng thể (Full Sitemap & Wireframe Specification) hoàn chỉnh cho hệ thống **Nền tảng Học trực tuyến & Bán khóa học OCODEJS**, được cập nhật chuẩn xác với tên thương hiệu **OCODEJS** đầy đủ trọn vẹn cả 4 phần theo đúng yêu cầu.
# BẢN MÔ TẢ THIẾT KẾ TỔNG THỂ HỆ THỐNG OCODEJS
**(Full Sitemap & Wireframe Specification)**
# PHẦN 1: CÁC TRANG CHÍNH (MAIN PAGES)
## 1.1. Trang Chủ (Homepage)
 * **Đường dẫn (URL Slug):** /
 * **Mục đích chính:** Giới thiệu giá trị cốt lõi của thương hiệu OCODEJS, định hướng người dùng mới khám phá khóa học lập trình, tăng tỷ lệ đăng ký tài khoản và chuyển đổi mua khóa học.
### Bố cục các thành phần (từ trên xuống dưới):
 1. **Header System:**
   * *Top Bar:* Thông báo ưu đãi OCODEJS (Flash Sale countdown), chọn ngôn ngữ, hotline hỗ trợ.
   * *Main Nav:* Logo OCODEJS, Menu Danh mục khóa học (Mega Menu), Thanh tìm kiếm thông minh OCODEJS Search (với Auto-suggest), Nút "Kích hoạt mã học", Nút "Đăng nhập / Đăng ký" hoặc Avatar + Thông báo + Giỏ hàng.
 2. **Hero Section:**
   * Tiêu đề lớn (H1): "Chinh Phục Lập Trình Thực Chiến Cùng OCODEJS".
   * Slogan: "Nền tảng đào tạo lập trình viên chuẩn công nghiệp".
   * Nút CTA chính: "Khám phá khóa học ngay" và Nút CTA phụ: "Học thử miễn phí".
   * Banner/Video giới thiệu OCODEJS chất lượng cao.
   * Social Proof: Số lượng học viên OCODEJS (>100k), Số khóa học (>1k), Đánh giá trung bình (4.9/5★).
 3. **Value Proposition Section (Tại sao chọn OCODEJS):**
   * Grid 4 cột: Giảng viên Chuyên gia OCODEJS, Bài tập Thực chiến, Cấp chứng chỉ OCODEJS, Hỗ trợ Code 1:1.
 4. **Flash Sale / Khóa Học Đang Giảm Giá (Time-sensitive):**
   * Countdown Timer đếm ngược.
   * Carousel hiển thị Card khóa học OCODEJS (Thumbnail, Badge giảm giá, Tiêu đề, Giảng viên, Đánh giá, Giá gốc, Giá giảm, CTA "Thêm vào giỏ").
 5. **Danh Mục Khóa Học Nổi Bật (Featured Categories):**
   * Lưới icon/ảnh đại diện: Frontend Development, Backend Node.js, ReactJS/Next.js, Full-stack OCODEJS Bootcamp.
 6. **Khóa Học Bán Chạy Nhất (Best Sellers):**
   * Tab phân loại: [Tất cả] [JavaScript] [ReactJS] [Node.js] [Python].
   * Danh sách Card khóa học OCODEJS theo Tab.
 7. **Lộ Trình Học Tập OCODEJS Career Path:**
   * Thẻ lộ trình nghề nghiệp (ví dụ: "Trở thành OCODEJS Full-stack Developer trong 6 tháng").
   * CTA: "Xem chi tiết lộ trình OCODEJS".
 8. **Đội Ngũ Giảng Viên OCODEJS:**
   * Slider danh sách Giảng viên: Ảnh chân dung, Chức danh, Số học viên, Đánh giá sao.
 9. **Cảm Nhận Học Viên OCODEJS (Testimonials):**
   * Card nhận xét kèm ảnh thật học viên OCODEJS, công ty đang làm việc.
 10. **Đối Tác Tuyển Dụng OCODEJS:**
   * Logo các doanh nghiệp đối tác nhận học viên OCODEJS.
 11. **Blog / Tin Tức Mới Nhất:**
   * 3 Bài viết kỹ thuật mới nhất từ OCODEJS Blog.
 12. **Bottom CTA Banner:**
   * "Bắt đầu hành trình lập trình cùng OCODEJS ngay hôm nay".
 13. **Footer System:**
   * *Cột 1:* Giới thiệu OCODEJS, logo, địa chỉ, mã số thuế, chứng nhận Bộ Công Thương.
   * *Cột 2:* Chương trình học OCODEJS.
   * *Cột 3:* Hỗ trợ khách hàng OCODEJS (Trung tâm trợ giúp, Chính sách hoàn tiền, Quy chế).
   * *Cột 4:* Đăng ký nhận tin OCODEJS, Mạng xã hội, Tải App OCODEJS (QR Code).
   * *Copyright Bar:* Bản quyền © OCODEJS.
### Nút bấm hành động (CTA):
 * "Khám phá khóa học ngay" (Primary CTA)
 * "Học thử miễn phí"
 * "Thêm vào giỏ hàng" / "Mua ngay"
 * "Đăng ký nhận ưu đãi OCODEJS"
### Trạng thái đặc biệt:
 * **Chưa có dữ liệu:** Ẩn Flash Sale nếu không có chương trình; Khối Best Sellers hiển thị khung Skeleton.
 * **Đang tải:** Hiệu ứng Skeleton Loader cho các Card khóa học.
 * **Khi báo lỗi:** Banner lỗi "Không thể kết nối đến máy chủ OCODEJS. [Thử lại]".
## 1.2. Trang Danh Mục Khóa Học Cấp 1 (Primary Category Page)
 * **Đường dẫn (URL Slug):** /danh-muc/[category-slug] (Ví dụ: /danh-muc/javascript-fullstack)
 * **Mục đích chính:** Gom nhóm các khóa học lập trình theo chuyên ngành lớn của OCODEJS.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Breadcrumb:** Trang chủ > Lập trình JavaScript.
 3. **Category Hero Banner:**
   * Tiêu đề danh mục OCODEJS (ví dụ: "Lập trình JavaScript & Frameworks").
   * Sub-categories Bar: ReactJS, VueJS, Node.js, TypeScript.
 4. **Layout 2 Cột (Main Content & Sidebar Filter):**
   * **Left Sidebar (Bộ lọc nâng cao OCODEJS Filter):**
     * *Cấp độ:* Beginner, Intermediate, Advanced.
     * *Hình thức:* Video OCODEJS, Live Bootcamp.
     * *Thời lượng:* 0-5 giờ, 5-20 giờ, 20+ giờ.
     * *Giá:* Miễn phí, Có phí.
     * *Nút:* "Áp dụng bộ lọc", "Xóa bộ lọc".
   * **Main Content Area:**
     * *Toolbar:* Số lượng kết quả ("Tìm thấy 48 khóa học OCODEJS"), Sắp xếp, Chế độ xem (Grid/List).
     * *Active Filters Bar:* Tag lọc đang chọn.
     * *Course Grid:* 3-4 cột Card khóa học OCODEJS.
     * *Phân trang:* Pagination [1] [2] [3]...
 5. **Khóa Học OCODEJS Đề Xuất.**
 6. **FAQ Accordion Về Ngành Học.**
 7. **Footer System OCODEJS.**
### Nút bấm hành động (CTA):
 * "Áp dụng bộ lọc", "Xóa tất cả"
 * "Mua ngay", "Thêm vào giỏ"
### Trạng thái đặc biệt:
 * **Chưa có dữ liệu:** Minh họa trống + "Chưa có khóa học OCODEJS thuộc danh mục này".
 * **Đang tải:** Skeleton loader dạng lưới.
 * **Khi báo lỗi:** "Không thể kết nối máy chủ OCODEJS. [Tải lại trang]".
## 1.3. Trang Giới Thiệu (About Us - About OCODEJS)
 * **Đường dẫn (URL Slug):** /gioi-thieu
 * **Mục đích chính:** Giới thiệu sứ mệnh, tầm nhìn và giá trị cốt lõi của thương hiệu OCODEJS.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Hero Section:** "OCODEJS - Đột Phá Tư Duy Lập Trình Viễn".
 3. **Con Số Ấn Tượng OCODEJS:**
   * 4 khối thống kê: Học viên OCODEJS, Khóa học, Giảng viên, Tỷ lệ có việc làm.
 4. **Câu Chuyện Sáng Lập OCODEJS (Our Story):**
   * Hành trình phát triển thương hiệu OCODEJS qua các mốc thời gian.
 5. **Sứ Mệnh & Tầm Nhìn OCODEJS.**
 6. **Giá Trị Cốt Lõi OCODEJS:** Thực chiến - Chất lượng - Cộng đồng - Đổi mới.
 7. **Đội Ngũ Lãnh Đạo OCODEJS.**
 8. **Báo Chí Nói Về OCODEJS.**
 9. **Footer System OCODEJS.**
### Nút bấm hành động (CTA):
 * "Gia nhập đội ngũ OCODEJS"
 * "Trở thành giảng viên OCODEJS"
### Trạng thái đặc biệt:
 * Trang static. Báo lỗi khi mất kết nối mạng.
## 1.4. Trang Liên Hệ (Contact Us)
 * **Đường dẫn (URL Slug):** /lien-he
 * **Mục đích chính:** Tiếp nhận yêu cầu tư vấn khóa học và hỗ trợ kỹ thuật cho học viên OCODEJS.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Breadcrumb:** Trang chủ > Liên hệ OCODEJS.
 3. **Layout 2 Cột:**
   * **Cột Trái (Thông tin văn phòng OCODEJS):**
     * Trụ sở chính OCODEJS, Hotline, Email support@ocodejs.com, Bản đồ Google Maps.
   * **Cột Phải (Form gửi yêu cầu OCODEJS Contact Form):**
     * Input: Họ tên (*), Email (*), Số điện thoại (*).
     * Dropdown: Chủ đề (Tư vấn khóa học OCODEJS, Lỗi kỹ thuật, Hợp tác).
     * Textarea: Nội dung chi tiết (*).
     * Nút CTA: "Gửi yêu cầu tới OCODEJS".
 4. **Khối FAQ Nhanh.**
 5. **Footer System OCODEJS.**
### Nút bấm hành động (CTA):
 * "Gửi yêu cầu tới OCODEJS"
 * "Chat Zalo / Messenger với OCODEJS"
### Trạng thái đặc biệt:
 * **Khi gửi Form:** Loading icon trên nút -> Thông báo xanh "OCODEJS đã nhận thông tin và sẽ phản hồi trong 24h".
# PHẦN 2: CÁC TRANG CON & TRANG CHI TIẾT (SUB-PAGES & DETAIL PAGES)
## 2.1. Trang Chi Tiết Khóa Học (Course Detail Page - PDP)
 * **Đường dẫn (URL Slug):** /khoa-hoc/[course-slug] (Ví dụ: /khoa-hoc/ocodejs-reactjs-mastery)
 * **Mục đích chính:** Cung cấp thông tin chi tiết về khóa học OCODEJS và kích thích hành động mua.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Breadcrumb:** Trang chủ > Lập trình > ReactJS > OCODEJS ReactJS Mastery.
 3. **Course Hero Header:**
   * *Cột Trái:* Tiêu đề (H1), Mô tả, Badge OCODEJS Choice, Đánh giá, Giảng viên, Ngôn ngữ.
   * *Cột Phải (Sticky Preview Card OCODEJS):*
     * Video trailer giới thiệu khóa học.
     * Giá bán hiện tại, Giá gốc, % Giảm giá, Countdown.
     * Nút CTA chính: "Mua ngay", "Thêm vào giỏ OCODEJS".
     * Nút CTA phụ: "Học thử bài 1", "Yêu thích".
     * Cam kết OCODEJS: Hoàn tiền 7 ngày, Truy cập trọn đời, Chứng chỉ OCODEJS.
 4. **Khối "Bạn Sẽ Học Được Gì Tại OCODEJS?" (Learning Outcomes).**
 5. **Khối Yêu Cầu Đầu Vào (Requirements).**
 6. **Khối Chương Trình Học OCODEJS (Course Syllabus Accordion):**
   * Số chương, bài học, thời lượng.
   * Danh sách Chương & Bài học (có nhãn "Học thử").
 7. **Khối Thông Tin Giảng Viên OCODEJS.**
 8. **Khối Đánh Giá Từ Học Viên OCODEJS (Reviews & Ratings):**
   * Điểm trung bình, bộ lọc đánh giá sao, danh sách nhận xét.
 9. **Khối Khóa Học OCODEJS Liên Quan.**
 10. **Footer System OCODEJS.**
### Nút bấm hành động (CTA):
 * "Mua ngay"
 * "Thêm vào giỏ OCODEJS"
 * "Học thử bài 1"
### Trạng thái đặc biệt:
 * **Chưa có dữ liệu:** "Chưa có đánh giá nào cho khóa học OCODEJS này."
 * **Đang tải:** Skeleton loader.
 * **Báo lỗi:** "Không tìm thấy khóa học OCODEJS này."
## 2.2. Trang Chi Tiết Bài Viết (Blog Detail Page - OCODEJS Blog)
 * **Đường dẫn (URL Slug):** /blog/[article-slug]
 * **Mục đích chính:** Chia sẻ kiến thức kỹ thuật và dẫn dắt người đọc tới các khóa học OCODEJS.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Breadcrumb:** Trang chủ > OCODEJS Blog > Bài viết.
 3. **Article Header:** Tag chuyên mục, Tiêu đề H1, Tác giả OCODEJS Team, Ngày đăng, Thời gian đọc.
 4. **Layout 2 Cột:**
   * **Cột Chính (Article Content):**
     * Banner ảnh đại diện, Mục lục tự động (Sticky TOC), Nội dung bài viết (Code snippet, H2, H3), In-article Banner quảng cáo khóa học OCODEJS, Form Bình luận.
   * **Cột Phụ (Sidebar):**
     * Ô tìm kiếm blog, Widget Khóa học OCODEJS Nổi bật, Bài viết xem nhiều.
 5. **Khối Bài Viết OCODEJS Liên Quan.**
 6. **Footer System OCODEJS.**
### Nút bấm hành động (CTA):
 * "Gửi bình luận"
 * "Đăng ký khóa học OCODEJS"
### Trạng thái đặc biệt:
 * **Đang tải:** Skeleton loader.
 * **Báo lỗi:** "Bài viết OCODEJS không tồn tại."
## 2.3. Trang Kết Quả Tìm Kiếm (Search Results Page)
 * **Đường dẫn (URL Slug):** /tim-kiem?q=[keyword]
 * **Mục đích chính:** Hiển thị kết quả tìm kiếm khóa học và bài viết trên OCODEJS.
### Bố cục các thành phần:
 1. **Header System OCODEJS** (Hiển thị lại từ khóa tìm kiếm).
 2. **Breadcrumb:** Trang chủ > Tìm kiếm OCODEJS.
 3. **Search Summary:** "Kết quả tìm kiếm OCODEJS cho: '[Từ khóa]'".
 4. **Tabs Phân Loại:** [Tất cả] [Khóa học OCODEJS] [Bài viết OCODEJS].
 5. **Layout 2 Cột:**
   * *Sidebar:* Bộ lọc khóa học OCODEJS.
   * *Content:* Lưới kết quả + Phân trang.
 6. **Footer System OCODEJS.**
### Nút bấm hành động (CTA):
 * "Thêm vào giỏ OCODEJS"
 * "Tìm từ khóa khác"
### Trạng thái đặc biệt:
 * **Empty State:** "Rất tiếc, OCODEJS không tìm thấy kết quả cho '[Từ khóa]'." + Gợi ý từ khóa hot.
## 2.4. Trang Lọc Dữ Liệu Nâng Cao (Explore & Browse Page)
 * **Đường dẫn (URL Slug):** /kham-pha
 * **Mục đích chính:** Cho phép học viên tự do lọc và chọn khóa học trong kho OCODEJS.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Page Title:** "Khám Phá Toàn Bộ Khóa Học OCODEJS".
 3. **Top Filter Bar:** Dropdown Chọn Danh mục, Trình độ, Giá tiền.
 4. **Main Grid:** Danh sách Card khóa học OCODEJS + Phân trang Ajax.
 5. **Footer System OCODEJS.**
### Nút bấm hành động (CTA):
 * "Reset bộ lọc OCODEJS"
### Trạng thái đặc biệt:
 * **Empty State:** "Không có khóa học OCODEJS nào thỏa mãn tiêu chí đã chọn."
# PHẦN 3: CÁC TRANG CHỨC NĂNG & LUỒNG NGƯỜI DÙNG (FUNCTIONAL & USER FLOWS)
## 3.1. Nhóm Trang Xác Thực Tài Khoản OCODEJS (Auth Flow)
### 3.1.1. Trang Đăng Nhập (Login Page)
 * **Đường dẫn (URL Slug):** /dang-nhap
 * **Mục đích chính:** Cho phép tài khoản OCODEJS truy cập hệ thống.
#### Bố cục các thành phần:
 1. **Minimal Header:** Logo OCODEJS + Link "Tạo tài khoản OCODEJS".
 2. **Main Login Card:**
   * Tiêu đề: "Đăng nhập OCODEJS".
   * Nút Social Login: Google, Facebook, GitHub.
   * Form: Email/SĐT, Mật khẩu, Checkbox "Ghi nhớ", Link "Quên mật khẩu?".
   * Nút CTA: "Đăng nhập OCODEJS".
 3. **Minimal Footer.**
#### Nút bấm hành động (CTA):
 * "Đăng nhập OCODEJS"
#### Trạng thái đặc biệt:
 * **Báo lỗi:** "Thông tin đăng nhập OCODEJS không chính xác."
### 3.1.2. Trang Đăng Ký Tài Khoản (Register Page)
 * **Đường dẫn (URL Slug):** /dang-ky
 * **Mục đích chính:** Cho phép người dùng mới tạo tài khoản OCODEJS.
#### Bố cục các thành phần:
 1. **Minimal Header:** Logo OCODEJS + Link "Đã có tài khoản OCODEJS? Đăng nhập".
 2. **Main Register Card:**
   * Form: Họ tên, Email, Số điện thoại, Mật khẩu (kèm thanh đo độ mạnh), Xác nhận mật khẩu.
   * Checkbox: "Tôi đồng ý với Điều khoản OCODEJS".
   * Nút CTA: "Tạo tài khoản OCODEJS".
 3. **Minimal Footer.**
#### Nút bấm hành động (CTA):
 * "Tạo tài khoản OCODEJS"
#### Trạng thái đặc biệt:
 * Real-time Validation lỗi nhập liệu.
### 3.1.3. Trang Quên Mật Khẩu (Forgot & Reset Password)
 * **Đường dẫn (URL Slug):** /quen-mat-khau và /dat-lai-mat-khau
 * **Mục đích chính:** Khôi phục mật khẩu tài khoản OCODEJS.
#### Bố cục các thành phần:
 * Form nhập Email đã đăng ký OCODEJS -> Gửi link reset -> Form nhập mật khẩu mới.
## 3.2. Luồng Mua Hàng & Thanh Toán (OCODEJS Checkout Flow)
### 3.2.1. Trang Giỏ Hàng (Shopping Cart Page)
 * **Đường dẫn (URL Slug):** /gio-hang
 * **Mục đích chính:** Xem lại các khóa học OCODEJS đã chọn và áp mã ưu đãi.
#### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Layout 2 Cột:**
   * **Cột Trái:** Danh sách khóa học OCODEJS trong giỏ (Thumbnail, Tiêu đề, Giá, Nút Xóa).
   * **Cột Phải (OCODEJS Order Summary):** Ô nhập Mã giảm giá OCODEJS Coupon, Chi tiết tạm tính, Tổng tiền, Nút CTA "Thanh toán ngay".
 3. **Khối Mua Kèm Ưu Đãi OCODEJS.**
 4. **Footer System OCODEJS.**
#### Nút bấm hành động (CTA):
 * "Tiến hành thanh toán"
 * "Áp dụng mã OCODEJS"
#### Trạng thái đặc biệt:
 * **Giỏ hàng trống:** "Giỏ hàng OCODEJS của bạn đang trống" + Nút "Khám phá khóa học".
### 3.2.2. Trang Thanh Toán (Checkout Page)
 * **Đường dẫn (URL Slug):** /thanh-toan
 * **Mục đích chính:** Thanh toán đơn hàng mua khóa học OCODEJS.
#### Bố cục các thành phần:
 1. **Minimal Header:** Logo OCODEJS + Quy trình 3 bước thanh toán.
 2. **Layout 2 Cột:**
   * **Cột Trái:** Thông tin người mua, Xuất hóa đơn VAT, Chọn Phương thức thanh toán (VietQR OCODEJS, Momo, VNPay, Thẻ Visa/Mastercard).
   * **Cột Phải:** Tóm tắt đơn hàng OCODEJS + Nút CTA "Hoàn tất thanh toán".
 3. **Minimal Footer.**
#### Nút bấm hành động (CTA):
 * "Hoàn tất thanh toán"
## 3.3. Khu Vực Quản Lý Cá Nhân & Học Tập (OCODEJS Workspace & LMS)
### 3.3.1. Trang Tổng Quan Học Viên (OCODEJS Student Dashboard)
 * **Đường dẫn (URL Slug):** /hoc-vien/khoa-hoc-cua-toi
 * **Mục đích chính:** Quản lý danh sách khóa học OCODEJS đã mua và tiến độ học tập.
#### Bố cục các thành phần:
 1. **Header OCODEJS (Log-in state).**
 2. **Left Sidebar Navigation:** Avatar, [Khóa học OCODEJS của tôi], [Lộ trình], [Chứng chỉ OCODEJS], [Lịch sử giao dịch], [Cài đặt].
 3. **Main Content:**
   * Widget Tiếp tục học (Khóa học OCODEJS gần nhất kèm % tiến độ).
   * Thống kê học tập OCODEJS (Giờ đã học, Bài tập đã nộp, Chứng chỉ).
   * Lưới Card khóa học OCODEJS đã sở hữu + Nút "Vào học".
#### Nút bấm hành động (CTA):
 * "Tiếp tục học"
 * "Tải chứng chỉ OCODEJS"
### 3.3.2. Màn Hình Phòng Học Trực Tuyến (OCODEJS Learning Workspace)
 * **Đường dẫn (URL Slug):** /bai-hoc/[course-slug]/[lesson-id]
 * **Mục đích chính:** Giao diện xem video bài giảng OCODEJS, làm bài tập code và thảo luận.
#### Bố cục các thành phần:
 1. **Top Bar Phòng Học OCODEJS:** Back button, Tiêu đề bài học, % hoàn thành khóa học OCODEJS.
 2. **Main Workspace Area (75% chiều rộng):**
   * Video Player chuẩn OCODEJS (hoặc IDE Code Editor nếu có bài thực hành).
   * Tabs bên dưới: [Tổng quan], [Tài liệu bài học], [Thảo luận OCODEJS Q&A], [Ghi chú].
 3. **Right Sidebar (25% chiều rộng):** Danh sách chương bài học OCODEJS.
#### Nút bấm hành động (CTA):
 * "Hoàn thành & Bài tiếp theo"
 * "Gửi câu hỏi cho OCODEJS"
### 3.3.3. Trang Quản Lý Tài Khoản Cá Nhân (Profile Settings)
 * **Đường dẫn (URL Slug):** /hoc-vien/tai-khoan
 * **Mục đích chính:** Cập nhật thông tin tài khoản OCODEJS và bảo mật.
#### Bố cục các thành phần:
 * Tabs: [Thông tin cá nhân], [Đổi mật khẩu], [Cài đặt thông báo OCODEJS].
### 3.3.4. Trang Lịch Sử Giao Dịch (Order History)
 * **Đường dẫn (URL Slug):** /hoc-vien/lich-su-giao-dich
 * **Mục đích chính:** Quản lý các hóa đơn đã thanh toán trên OCODEJS.
### 3.3.5. Trang Trung Tâm Thông Báo (Notification Center)
 * **Đường dẫn (URL Slug):** /hoc-vien/thong-bao
 * **Mục đích chính:** Cập nhật thông báo hệ thống và ưu đãi từ OCODEJS.
# PHẦN 4: CÁC TRANG TÀI LIỆU & TRANG PHỤ TRỢ (DOCUMENTATION & UTILITY PAGES)
## 4.1. Trang Điều Khoản Sử Dụng (Terms of Service - OCODEJS Terms)
 * **Đường dẫn (URL Slug):** /dieu-khoan-su-dung
 * **Mục đích chính:** Quy định trách nhiệm pháp lý giữa học viên và OCODEJS.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Breadcrumb:** Trang chủ > Điều khoản sử dụng OCODEJS.
 3. **Document Header:** Tiêu đề H1 "Điều Khoản Sử Dụng OCODEJS", Ngày cập nhật, Nút "Tải PDF".
 4. **Layout 2 Cột:**
   * *Left Sidebar:* Sticky Table of Contents (1. Quyền sở hữu trí tuệ OCODEJS, 2. Quy định tài khoản, 3. Hoàn tiền OCODEJS, 4. Hành vi bị cấm).
   * *Right Content:* Nội dung văn bản pháp lý OCODEJS.
 5. **Footer System OCODEJS.**
## 4.2. Trang Chính Sách Bảo Mật (Privacy Policy)
 * **Đường dẫn (URL Slug):** /chinh-sach-bao-mat
 * **Mục đích chính:** Cam kết bảo mật dữ liệu người dùng trên nền tảng OCODEJS.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Document Header:** Tiêu đề H1 "Chính Sách Bảo Mật OCODEJS".
 3. **Main Content:** Quy trình thu thập, xử lý và bảo vệ dữ liệu học viên OCODEJS.
 4. **Form Yêu Cầu Xóa Dữ Liệu OCODEJS.**
 5. **Footer System OCODEJS.**
## 4.3. Trang Câu Hỏi Thường Gặp (FAQ Center - OCODEJS FAQ)
 * **Đường dẫn (URL Slug):** /tro-giup/faq
 * **Mục đích chính:** Giải đáp nhanh thắc mắc về khóa học và tài khoản OCODEJS.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **FAQ Search Hero:** Thanh tìm kiếm câu hỏi "Bạn cần OCODEJS trợ giúp gì?".
 3. **Category Tabs:** [Tất cả] [Khóa học OCODEJS] [Thanh toán] [Tài khoản].
 4. **Main Accordion List:** Danh sách câu hỏi & câu trả lời xổ ra/gập lại.
 5. **Support Banner:** "Vẫn cần hỗ trợ từ OCODEJS?" + Nút "Gửi yêu cầu".
 6. **Footer System OCODEJS.**
## 4.4. Trang 404 Not Found (Báo Lỗi Không Tìm Thấy Trang)
 * **Đường dẫn (URL Slug):** Hiển thị khi URL OCODEJS không tồn tại.
### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Main Content (Centered):**
   * Illustration vui nhộn chủ đề lập trình OCODEJS.
   * Tiêu đề: "404 - OCODEJS không tìm thấy trang này!".
   * Thanh tìm kiếm khóa học OCODEJS.
   * Nút CTA: "Quay về Trang Chủ OCODEJS".
 3. **Footer System OCODEJS.**
## 4.5. Trang 500 Server Error (Báo Lỗi Máy Chủ)
 * **Đường dẫn (URL Slug):** Hiển thị khi server OCODEJS gặp sự cố.
### Bố cục các thành phần:
 1. **Minimal Header OCODEJS.**
 2. **Main Content:**
   * Hình ảnh máy chủ OCODEJS đang sửa chữa.
   * Tiêu đề: "500 - Máy chủ OCODEJS đang gián đoạn".
   * Nút CTA: "Thử tải lại trang".
 3. **Minimal Footer.**
## 4.6. Trang Bảo Trì Hệ Thống (Maintenance Page)
 * **Đường dẫn (URL Slug):** Kích hoạt khi OCODEJS nâng cấp hệ thống.
### Bố cục các thành phần:
 1. **Minimal Header OCODEJS.**
 2. **Main Content:**
   * Tiêu đề: "OCODEJS Đang Bảo Trì Nâng Cấp!".
   * Countdown Timer đếm ngược thời gian hoàn tất.
   * Form nhập Email nhận thông báo từ OCODEJS.
 3. **Minimal Footer.**
## 4.7. Trang Xác Nhận Thành Công / Thất Bại (Status Feedback Pages)
### 4.7.1. Trang Xác Nhận Thanh Toán Thành Công (Order Success)
 * **Đường dẫn (URL Slug):** /thanh-toan/thanh-cong
#### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Success Card:**
   * Icon tích xanh OCODEJS.
   * Tiêu đề: "Thanh toán thành công! Chào mừng bạn đến với OCODEJS."
   * Mã đơn hàng & Thông tin giao dịch.
   * Nút CTA chính: "Đi đến Phòng học OCODEJS".
 3. **Footer System OCODEJS.**
### 4.7.2. Trang Thanh Toán Thất Bại (Payment Failed)
 * **Đường dẫn (URL Slug):** /thanh-toan/that-bai
#### Bố cục các thành phần:
 1. **Header System OCODEJS.**
 2. **Failed Card:**
   * Icon X đỏ.
   * Tiêu đề: "Thanh toán không thành công!".
   * Lý do lỗi & Nút CTA "Thử thanh toán lại" hoặc "Liên hệ hỗ trợ OCODEJS".
 3. **Footer System OCODEJS.**
Toàn bộ bản kiến trúc thông tin cho dự án **OCODEJS** đã hoàn thành đầy đủ 100% chi tiết ở cả 4 phần!

