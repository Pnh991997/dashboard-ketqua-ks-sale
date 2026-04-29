import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Search, X, ChevronDown, ChevronUp, Award, AlertTriangle, TrendingUp, TrendingDown,
  Minus, Filter, BarChart3, Users, Trophy, FileWarning, Lightbulb, Pill, Syringe,
  ArrowUpDown, Check, Info, Sparkles, Target, ChevronRight, LayoutDashboard
} from "lucide-react";

const RAW = [{"year":2026,"month":3,"name":"Tống Bích Ngọc","email":"42670","inside":"ngoctb21@fpt.com","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nông Thị Tuyên","email":"42816","inside":"TuyenNT44@fpt.com","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Trần Thị Phương Chi","email":"ChiTTP5","inside":"ChiTTP5@fpt.com","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Thanh Vân","email":"63392","inside":"VanNTT65","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":3,"name":"Tạ Thu Hà","email":"59650","inside":"HaTT59@fpt.com","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Lê Anh","email":"50156","inside":"anhl4@fpt.com","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Nguyễn Thị Ánh Hồng","email":"63106","inside":"HongNTA5@fpt.com","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Huỳnh Thị Ngọc Yến","email":"51838","inside":"yenhtn@fpt.com","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Nguyễn Phước Lộc","email":"55820","inside":"LocNP6","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":4,"category":"Trung bình"},{"year":2026,"month":3,"name":"Lê Vũ Hoàng","email":"55225","inside":"Hoanglv37@fpt.com","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Hồ Như Trúc Mai","email":"59235","inside":"maihnt@fpt.com","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Võ Như Ý","email":"45925","inside":"YNVN3@fpt.com","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Phan Hà Phương Trinh","email":"55227","inside":"TrinhPHP2@fpt.com","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Thiều Thị Kim Doan","email":"47830","inside":"DoanTTK@fpt.com","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Phạm Châu Anh","email":"56011","inside":"AnhPC4@fpt.com","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Dương Thu Huyền","email":"62982","inside":"HuyenDT67@fpt.com","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"LƯU MỸ TÚ","email":"56987","inside":"TuLM10@fpt.com","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Võ Thị Trúc Mai","email":"64475","inside":"MaiVTT5@fpt.com","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Lê Thị Mỹ Hiền","email":"49765","inside":"HienLTM9@fpt.com","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Như Quỳnh","email":"64095","inside":"QuynhNN62@fpt.com","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":3,"name":"Nguyễn Thị Hồng Hạnh","email":"55699","inside":"HanhNTH25@fpt.com","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Quách Nguyễn Phương Vy","email":"59236","inside":"VyQNP@gmail.com","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Hải Anh Thư","email":"41524","inside":"thunha7@fpt.com","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Thảo Nhi","email":"64098","inside":"NhiNTT20@fpt.com","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thu Hương","email":"65728","inside":"HuongNT208@fpt.com","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Lê Bảo Quỳnh","email":"68338","inside":"QuynhLB@fpt.com","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Văn Thị Yến Như","email":"64474","inside":"NhuVTY2@fpt.com","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Đỗ Nguyễn Tường Vi","email":"46324","inside":"ViDNT4@fpt.com","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Lê Khánh Huyền","email":"65223","inside":"HuyenNLK@fpt.com","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Đỗ Thu Trang","email":"57586","inside":"TrangDT80@fpt.com","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":3,"name":"trương hồng ngân","email":"50925","inside":"nganth30@fpt.com","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":3,"name":"Nguyễn Võ Lam Vi","email":"41528","inside":"ViNVL3@fpt.com","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"LÊ THỊ KHÁNH HUYỀN","email":"63100","inside":"HuyenLTK4@fpt.com","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":3,"name":"Nguyễn Ngọc Mai","email":"56535","inside":"mainn16@fpt.com","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Lê Thị Kiều Hạnh","email":"41542","inside":"HanhLTK2@fpt.com","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Trương Thị Vy","email":"45495","inside":"vytt19@fpt.com","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"ngô phan đức duy","email":"48408","inside":"duynpd2@fpt.com","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Nguyễn Đăng Dương","email":"59649","inside":"DuongND46@fpt.com","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Nguyễn Ngọc Thanh Ngân","email":"63390","inside":"NganNNT10@fpt.com","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Bích Diệp","email":"50158","inside":"Diepnb6@fpt.com","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Phan Ngọc Diệu","email":"47831","inside":"DieuPTN2@fpt.com","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Nguyễn Phương Lan","email":"48677","inside":"lannp9@fpt.com","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Kim Ánh Ngọc","email":"45696","inside":"NgocKA@fpt.com","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Trương Thị Hằng","email":"66569","inside":"HangTT88@fpt.com","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":5,"category":"Trung bình"},{"year":2026,"month":3,"name":"Mai Thị Thanh Trà","email":"57710","inside":"TraMTT10@fpt.com","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":5,"category":"Trung bình"},{"year":2026,"month":3,"name":"Lê Thị Mai Anh","email":"55240","inside":"AnhLTM9@fpt.com","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Nguyễn Thị Trà Giang","email":"61333","inside":"GiangNTT47@pft.com","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Trịnh Thu Nga","email":"52153","inside":"NgaTT24@fpt.com","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Nguyễn Thị Hồng Ngọc","email":"68342","inside":"NgocNTH74@fpt.com","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Hoàng Đình Nhân","email":"49022","inside":"NhanHD4@FPT.COM","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Trịnh Thị Thúy Quỳnh","email":"68704","inside":"QuynhTTT12@fpt.com","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Quỳnh","email":"54948","inside":"QuynhNT49@fpt.com","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Ngọc Hân","email":"45944","inside":"HanNTN38@fpt.com","leader":"Nguyễn Phan Quỳnh Anh","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Lê Thị Thảo Loan","email":"40673","inside":"loanltt8@fpt.com","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Lương Thùy Linh","email":"68688","inside":"LinhLT110@fpt.com","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Huỳnh Kim Linh","email":"58724","inside":"linhhk21@fpt.com","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Mạc Thị Tuyết Anh","email":"61879","inside":"AnhMTT@fpt.com","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Trương Thị Hoàng Yến","email":"68433","inside":"YenTTH25@fpt.com","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Minh Tiến","email":"46526","inside":"tiennm50@fpt.com","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":3,"name":"Lê Ngọc Lan Vi","email":"55022","inside":"vilnl@fpt.com","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Hải Yến","email":"67102","inside":"yennth105@fpt.com","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Trương Thị Trang","email":"44183","inside":"trangtt98@fpt.com","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Lê Như Ngọc","email":"67567","inside":"NgocLN10@fpt.com","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Hoàng Lan Phượng","email":"68341","inside":"PhuongHL4@fpt.com","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Hoàng Trân","email":"63769","inside":"Trannh@fpt.com","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Bùi Cường Vi","email":"53990","inside":"Vibc@fpt.com","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":5,"category":"Trung bình"},{"year":2026,"month":3,"name":"Nguyễn Thị huệ","email":"52152","inside":"HueNT39@fpt.com","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Nguyễn Thị Thanh Hoà","email":"62831","inside":"hoantt53","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Lương Trần Bảo Phúc","email":"53050","inside":"PhucLTB2","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":3,"name":"Huỳnh Thanh Trúc","email":"60331","inside":"trucht5@fpt.com","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Hồng Ánh","email":"45176","inside":"AnhNTH44@fpt.com","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Hoàng Mạnh Hà","email":"53788","inside":"HaHM5@fpt.com","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"trương anh thư","email":"58102","inside":"thuta13Fpt.com","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Lê Tuyết Anh","email":"53869","inside":"AnhLT185@fpt.com","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Phạm Hoàng Phương","email":"55019","inside":"phuongph10@fpt.com","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Nguyễn Trần Thủy Tiên","email":"53370","inside":"tienntt19@fpt.com","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Thùy Linh","email":"52154","inside":"linhntt67@fpt.com","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Trần Bảo Quyên","email":"68492","inside":"QuyenTB6@fpt.com","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":5,"category":"Trung bình"},{"year":2026,"month":3,"name":"Vũ Tiến Thành","email":"ThanhVT57","inside":"ThanhVT57@fpt.com","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Nguyễn Hoàng Kim Ngân","email":"63996","inside":"ngannhk4","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Ngô Nhật Tân","email":"51994","inside":"TanNN23@FPT.COM","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Lê Thị Hồng Linh","email":"7787","inside":"LinhLTH9@fpt.com","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Trần Thị Thuỳ Trang","email":"68712","inside":"TrangTTT64@fpt.com","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Trịnh Thị Mỹ Vi","email":"59070","inside":"Vittm2@fpt.com","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Nguyễn Mai Anh","email":"61204","inside":"AnhNM70","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Nguyễn Thị Ngọc Châu","email":"61026","inside":"Chauntn9@fpt.com","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Trần Văn Tâm","email":"55121","inside":"TAMTV19@fpt.com","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":3,"name":"Trần Lê Hải Bình","email":"47098","inside":"binhtlh@fpt.com","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Trương Thị Hương Thảo","email":"57387","inside":"ThaoTTH10","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Huỳnh Thanh Ngọc","email":"61633","inside":"ngocht18@fpt.com","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Huỳnh Trần Tường Vi","email":"68875","inside":"Vihtt14@fpt.com","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Thu Hà","email":"68337","inside":"HaNTT135@fpt.com","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Lê Khánh Ngọc","email":"53356","inside":"ngoclk2@fpt.com","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Mào Thị Chín","email":"68069","inside":"ChinMT@fpt.com","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Nguyễn Ngọc Trâm","email":"61875","inside":"TramNN18@fpt.com","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":3,"name":"Đỗ Diệp Minh","email":"68208","inside":"MinhDD38@fpt.com","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Trần Thị Hồng Ngọc","email":"68070","inside":"ngoctth25@fpt.com","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Ngô Thị Bích Lựu","email":"48971","inside":"Luuntb4@fpt.com","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Phan Tiểu Thanh Trúc","email":"61412","inside":"TrucPTT5@fpt.com","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Như Quỳnh","email":"68267","inside":"QuynhNTN96@fpt.com","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":3,"name":"Mai Huỳnh Khánh Uyên","email":"7801","inside":"UyenMHK @fpt.com","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Tuấn Đại","email":"54947","inside":"daint17@fpt.com","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"mai đoàn anh thư","email":"50926","inside":"thumda@fpt..com","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"nguyễn thị phương vân","email":"63103","inside":"vanntp@fpt.com","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Chu Thị Quỳnh","email":"58972","inside":"quynhct2@fpt.com","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Thị Thùy Linh","email":"54699","inside":"linhntt77@fpt.com","leader":"Nông Thị Tuyên","department":"Thuốc","team":"CMYD","score":6,"category":"Trung bình"},{"year":2026,"month":3,"name":"Phan Thị Minh Hạ","email":"63924","inside":"haptm2@fpt.com","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"LÊ QUANG ĐẠO","email":"53049","inside":"daolq3@fpt.com","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Đặng Thu Hà","email":"48386","inside":"hadt78@fpt.com","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Trần Vi","email":"59887","inside":"Vit2","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Từ Thị Tú Uyên","email":"61414","inside":"UyenTTT19@fpt.com","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Vũ Lê Như Uyên","email":"2173","inside":"UyenVLN@fpt.com","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Phan Bội Thy","email":"4036","inside":"ThyPB@fpt.com","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Trần Thị Khánh Huyền","email":"63998","inside":"Huyenttk13@fpt.com","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":3,"name":"Nguyễn Ngọc Diệu Tuyền","email":"40254","inside":"tuyennnd2@fpt.com","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":8,"category":"Giỏi"},{"year":2026,"month":3,"name":"Tô Thị Hồng Anh","email":"46768","inside":"AnhTTH34@fpt.com","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Tống Bích Ngọc","email":"NgocTB21@fpt.com","inside":"42670","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Trần Thị Phương Chi","email":"ChiTTP5@fpt.com","inside":"66094","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"đặng thị thương","email":"ThuongDT22@fpt.com","inside":"59880","leader":"Võ Hải Hưng","department":"Thuốc","team":"Call","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Thị Kim Yến","email":"Yenntk13@fpt.com","inside":"58613","leader":"Võ Hải Hưng","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"nguyễn phương thảo","email":"thaonp54@fpt.com","inside":"54046","leader":"Nguyễn Thanh Tâm","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Nguyễn Tuấn Đại","email":"Daint17@fpt.com","inside":"54947","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Trần Duy Khoa","email":"KhoaTD62@fpt.com","inside":"68558","leader":"Võ Hải Hưng","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Mai Đoàn Anh Thư","email":"ThuMDA@FPT.COM","inside":"50926","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Thị Thùy Linh","email":"LinhNTT77@fpt.com","inside":"54699","leader":"Trương Thị Trang","department":"Thuốc","team":"CMYD","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"Trần Vi","email":"vit2@fpt.com","inside":"59887","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Trần Thị Sen","email":"Sentt5@fpt.com","inside":"59074","leader":"Võ Hải Hưng","department":"Thuốc","team":"Call","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"Bùi Thị Kim Yến","email":"YenBTK2@fpt.com","inside":"45766","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Cù Thị Thu","email":"ThuCT5@fpt.com","inside":"9749","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"NGUYỄN THỊ KIM YẾN","email":"YenNTK18@fpt.com","inside":"67031","leader":"Võ Hải Hưng","department":"Thuốc","team":"Call","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Minh Hải Yến","email":"YenNMH@fpt.com","inside":"61334","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Nguyễn Ngọc Diệu Tuyền","email":"TuyenNND2@fpt.com","inside":"40254","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Quách Nguyễn Phương Vy","email":"VyQNP@fpt.com","inside":"59236","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Thị Hồng Nhung","email":"NhungLTH52@fpt.com","inside":"48589","leader":"Lê Quang Phương Anh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trương Thị Trang","email":"TrangTT98@fpt.com","inside":"44183","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Đỗ Nguyễn Tường Vi","email":"ViDNT4@fpt.com","inside":"46324","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Hồng Hạnh","email":"HanhNTH25@fpt.com","inside":"55699","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Võ Như Ý","email":"YNVN3@fpt.com","inside":"45925","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":10,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Thị Khánh Huyền","email":"HuyenLTK4@fpt.com","inside":"63100","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Phạm Hoàng Minh","email":"MinhPH23@fpt.com","inside":"48591","leader":"Lê Quang Phương Anh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Vũ Lê Như Uyên","email":"UyenVLN@fpt.com","inside":"2173","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Lê Thị Tuyết Nhi","email":"NhiLTT17@fpt.com","inside":"68491","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Quang Phương Anh","email":"anhlqp3@fpt.com","inside":"47507","leader":"Lê Quang Phương Anh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thu Hương","email":"HuongNT208@fpt.com","inside":"65728","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trương Thị Hằng","email":"HangTT88@fpt.com","inside":"66569","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Phan Thị Minh Hạ","email":"HaPTM2@fpt.com","inside":"63924","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Thị Thảo Nhi","email":"NhiNTT20@fpt.com","inside":"64098","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thanh Tâm","email":"TamNT124@fpt.com","inside":"41176","leader":"Nguyễn Thanh Tâm","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Phan Tiểu Thanh Trúc","email":"TrucPTT5@fpt.com","inside":"61412","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"HỒ NHƯ TRÚC MAI","email":"maihnt@fpt.com","inside":"59235","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Thị Hoàng Oanh","email":"oanhlth9@fpt.com","inside":"43145","leader":"Nguyễn Hoàng Minh Hiếu","department":"Thuốc","team":"Call","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Bảo Trân","email":"TranNB17@fpt.com","inside":"65559","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Huỳnh Thanh Trúc","email":"Trucht5@fpt.com","inside":"60331","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"nguyễn thị phương vân","email":"vanntp@fpt.com","inside":"63103","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"Trần Tiến Công","email":"CongTT10@fpt.com","inside":"46842","leader":"Kiều Thùy Linh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Mạc Thị Tuyết Anh","email":"AnhMTT@fpt.com","inside":"61879","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Trịnh Thị Mỹ Vi","email":"vittm2@fpt.com","inside":"59070","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Thu Uyên","email":"UyenNTT44@fpt.com","inside":"58713","leader":"Nguyễn Thanh Tâm","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Hà Phương Thảo","email":"ThaoHP12@fpt.com","inside":"56559","leader":"Nguyễn Văn Anh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"nguyễn hoàng kim ngân","email":"ngannhk4@fpt.com","inside":"63996","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Thu Hà","email":"HaNTT135@fpr.com","inside":"68337","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Ngọc lan Vi","email":"Vilnl@fpt.com","inside":"55022","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Huỳnh Thanh Ngọc","email":"NgocHT18@fpt.com","inside":"61633","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Văn Thị Yến Như","email":"NhuVTY2@fpt.com","inside":"64474","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Lê Tấn Tài","email":"TaiLT24@fpt.com","inside":"68871","leader":"Nguyễn Hoàng Minh Hiếu","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Mạnh Kiên","email":"KienNM5@fpt.com","inside":"47583","leader":"Nguyễn Thị Khánh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Ngọc Trâm","email":"TramNN18@fpt.com","inside":"61875","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Văn Anh","email":"anhnv103@fpt.com","inside":"45174","leader":"Nguyễn Văn Anh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Huỳnh Kim Linh","email":"linhhk21@fpt.com","inside":"58724","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Thị Thảo Loan","email":"loanltt8@fpt.com","inside":"40673","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Thị Hồng Linh","email":"LinhLTH9@fpt.com","inside":"7787","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Lê Khánh Huyền","email":"HuyenNLk@fpt.com","inside":"65223","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Võ Thị Thùy Dương","email":"Duongvtt10@fpt.com","inside":"61411","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lưu Mỹ Tú","email":"TuLM10@fpt.com","inside":"56987","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trương Hồng Ngân","email":"nganth30","inside":"50925","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Đoàn Minh An","email":"Andm3@fpt.com","inside":"53358","leader":"Lê Quang Phương Anh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Thị Kiều Hạnh","email":"HanhLTK2@fpt.com","inside":"41542","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"PHẠM CHÂU ANH","email":"AnhPC4@fpt.com","inside":"56011","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Mào Thị Chín","email":"ChinMT@fpt.com","inside":"68069","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Hoàng Thanh Tân","email":"TanHT11@FPT.com","inside":"45946","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":4,"category":"Trung bình"},{"year":2026,"month":4,"name":"Lê Vũ Hoàng","email":"HoangLV37@fpt.com","inside":"55225","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Ngô Nhật Tân","email":"TannNN23@FPT.COM","inside":"51994","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Vũ Khánh Linh","email":"Linhvk8@fpt.com","inside":"53485","leader":"Nguyễn Văn Anh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"vũ Thị Thảo","email":"thaovt22@fpt.com","inside":"53081","leader":"Trần Ngọc Lan","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Thùy Linh","email":"linhntt67@fpt.com","inside":"52154","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Phạm Thu Hà","email":"HaPT72@fpt.com","inside":"51203","leader":"Nguyễn Thị Khánh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Khánh","email":"KhanhNT30@fpt.com","inside":"42376","leader":"Nguyễn Thị Khánh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Võ Thị Ngọc Hân","email":"HanVTN4@fpt.com","inside":"8055","leader":"Võ Thị Ngọc Hân","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Diệu Pháp","email":"PhapLD2@gmail.com","inside":"55024","leader":"Võ Thị Ngọc Hân","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Hải Anh Thư","email":"thunha7@fpt.com","inside":"41524","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Phương Lan","email":"Lannp9@fpt.com","inside":"48677","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"NGUYỄN THỊ NGỌC CHÂU","email":"CHAUNTN9@FPT.COM","inside":"61026","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Huỳnh Trần Tường Vi","email":"vihtt14@fpt.com","inside":"68875","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":4,"category":"Trung bình"},{"year":2026,"month":4,"name":"Lê Thị Thương Huyền","email":"HuyenLTT29@fpt.com","inside":"58711","leader":"Trần Ngọc Lan","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lương Trần Bảo Phúc","email":"PhucLTB2@fpt.com","inside":"53050","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"Trần Bảo Quyên","email":"QuyenTb6@fpt.com","inside":"68492","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Lê Vũ","email":"vunl16@fpt.com","inside":"61655","leader":"Võ Thị Ngọc Hân","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Bùi Giáng Hương","email":"HuongBG@fpt.com","inside":"60015","leader":"Nguyễn Thị Khánh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Thanh Hoà","email":"Hoantt53@fpt.com","inside":"62831","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Võ Lam Vi","email":"ViNVL3@fpt.com","inside":"41528","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Kim Ánh Ngọc","email":"NgocKA@fpt.com","inside":"45696","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trương Thị Tuyết Trân","email":"Tranttt4@fpt.com","inside":"61877","leader":"Võ Thị Ngọc Hân","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Ngọc Hân","email":"Hanntn38@fpt.com","inside":"45944","leader":"Nguyễn Phan Quỳnh Anh","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Lê Quang Đạo","email":"daolq3@fpt.côm","inside":"53049","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Phạm Hoàng Phương","email":"phuongph10@fpt.com","inside":"55019","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Ngô Phan Đức Duy","email":"Duynpd2@fpt.com","inside":"48408","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trương Thị Vy","email":"vytt19@fpt.com","inside":"45495","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Khánh Ngọc","email":"NgocLK2@fpt.com","inside":"53356","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Lê Bảo Quỳnh","email":"QuynhLB@fpt.com","inside":"68338","leader":"Bùi Thị Kim Yến","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Như Ngọc","email":"NgocLN10@fpt.com","inside":"67567","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"Võ Thị Trúc Mai","email":"MaiVTT5@fpt.com","inside":"64475","leader":"Lê Thị Mỹ Hiền","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Thị Thanh Vân","email":"VanNTT65","inside":"63392","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"Nguyễn Thị Vân Nhi","email":"Nhintv2@fpt.com","inside":"47747","leader":"Lê Quang Phương Anh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trần Thị Thu Huyền","email":"HuyenTTT34@fpt.com","inside":"66456","leader":"Nguyễn Văn Anh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Ngọc Bình Giao","email":"giaonnb@fpt.com","inside":"61024","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Đoàn Thị Thanh Tú","email":"TuDTT5@fpt.com","inside":"45913","leader":"Võ Thị Ngọc Hân","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lương Minh Châu","email":"ChauLM14@fpt.com","inside":"60834","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Võ Hải Hưng","email":"HungVH5@fpt.com","inside":"52545","leader":"Võ Hải Hưng","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Thị Yến Chi","email":"ChiLTY@fpt.com","inside":"ChiLTY","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trần Lê Hải Bình","email":"BinhTLH@fpt.com","inside":"47098","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Đăng Dương","email":"DuongND46@fpt.com","inside":"59649","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Chí Thanh","email":"ThanhNC90@fpt.com","inside":"49473","leader":"Nguyễn Thị Khánh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"nguyễn thị hà phương","email":"phuongnth71@fpt.com","inside":"50151","leader":"Nguyễn Văn Anh","department":"Thuốc","team":"Call","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"Phan Bội Thy","email":"ThyPB@fpt.com","inside":"4036","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Tạ Thu Hà","email":"HaTT59@fpt.com","inside":"56650","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"Nguyễn Mai Anh","email":"anhNm70@fpt.com","inside":"61204","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trương Thị Hoàng Yến","email":"yentth25@fpt.com","inside":"68433","leader":"Lê Thị Thảo Loan","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Trần Văn Tâm","email":"TamTV19@fpt.com","inside":"55121","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Đỗ Thu Trang","email":"TrangDT80@fpt.com","inside":"57586","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Trương Ngọc Anh","email":"Truongngocanhbg1122@gmail.com","inside":"54516","leader":"Kiều Thùy Linh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lưu Quỳnh Trang","email":"TrangLQ6@fpt.com","inside":"62744","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":4,"category":"Trung bình"},{"year":2026,"month":4,"name":"Nguyễn Thị Cần","email":"CanNT2@fpt.com","inside":"54517","leader":"Kiều Thùy Linh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Mai Hương","email":"Huongntm20@fpt.com","inside":"53486","leader":"Nguyễn Thị Khánh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"NGÔ THỊ BÍCH LỰU","email":"Luuntb4@fpt.com","inside":"48971","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Tiến Bắc","email":"bacnt16@fpt.com","inside":"51050","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Dung","email":"Dungnt395@fpt.com","inside":"62526","leader":"Nguyễn Thị Khánh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Phạm Thị Thu","email":"ThuPT38@fpt.com","inside":"66156","leader":"Kiều Thùy Linh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Tô Thị Hồng ANH","email":"ANHTTH34@FPT.COM","inside":"46768","leader":"Vũ Lê Như Uyên","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Thị Hồng Ánh","email":"AnhNTH44@fpt.com","inside":"45176","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trần Thị Thuỳ Trang","email":"TrangTTT64@fpt.com","inside":"68712","leader":"Lê Thị Hồng Linh","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Như Quỳnh","email":"QuynhNTN96@fpt.com","inside":"68267","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Đỗ Diệp Minh","email":"MinhDD38@fpt.com","inside":"68208","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trần Thị Hồng Ngọc","email":"Ngoctth25@fpt.com","inside":"68070","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Hoàng Thị Phượng","email":"PhuongHT34@fpt.com","inside":"57927","leader":"Trương Thị Trang","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Ngọc Quỳnh Như","email":"Nhunnq5@fpt.com","inside":"68073","leader":"Nguyễn Hoàng Minh Hiếu","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Vân Anh","email":"AnhNTV89@fpt.com","inside":"4731","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Võ Nghi Văn","email":"VanNVN@fpt.com","inside":"63768","leader":"Nguyễn Trần Kim Kha","department":"Thuốc","team":"Call","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"trương anh thư","email":"thuta13@fpt.com","inside":"58102","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Thiều Thị Kim Doan","email":"doanttk@fpt.com","inside":"47830","leader":"Tống Bích Ngọc","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Phạm Thị Thùy Ngân","email":"NganPTT9@fpt.com","inside":"53865","leader":"Nguyễn Trần Kim Kha","department":"Thuốc","team":"Call","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Trương Thị Hương Thảo","email":"ThaoTTH10@fpt.com","inside":"57387","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Ngọc Thanh Ngân","email":"NganNNT10@fpt.com","inside":"63390","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Phạm Huỳnh Huế Trân","email":"TranPHH@fpt.com","inside":"63927","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"Phan Hà Phương Trinh","email":"TrinhPHP2@fpt.com","inside":"55227","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Thị Lệ Trinh","email":"TrinhNTL4@fpt.com","inside":"44459","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trịnh Thu Nga","email":"NgaTT24@fpt.com","inside":"52153","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Mai Thị Thanh Trà","email":"TraMTT10@fpt.com","inside":"57710","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Phạm Hồ Mai Khôi","email":"KhoiPHM2@fpt.com","inside":"67827","leader":"Nguyễn Trần Kim Kha","department":"Thuốc","team":"Call","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Huỳnh Thị Ngọc Yến","email":"yenhtn@fpt.com","inside":"51838","leader":"Nguyễn Thị Lệ Trinh","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Bùi Linh Chi","email":"ChiBL3@fpt.com","inside":"54296","leader":"Lê Quang Phương Anh","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trịnh Thị Thùy Trang","email":"TrangTTT142@FPT.COM","inside":"47187","leader":"Nguyễn Văn Anh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Bích Diệp","email":"Diepnb6@fpt.com","inside":"50158","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"VŨ THỊ THÚY","email":"thuyvt71@fpt.com","inside":"44901","leader":"Nguyễn Thanh Tâm","department":"Thuốc","team":"Call","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Bùi Cường Vi","email":"Vibc@fpt.com","inside":"53990","leader":"Huỳnh Quang Đức","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Lê Thu Huyền","email":"Huyenlt73@fpt.com","inside":"69617","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"Vũ Tiến Thành","email":"ThanhVT57@fpt.com","inside":"68071","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Hoàng Lan Phượng","email":"PhuongHL4@fpt.com","inside":"68341","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Phạm Huỳnh Thảo Nguyên","email":"NguyenPHT2@fpt.com","inside":"55701","leader":"Nguyễn Hoàng Minh Hiếu","department":"Thuốc","team":"Call","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Lê Thị Mai Anh","email":"AnhLTM9@fpt.com","inside":"55240","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Hoàng Lan Nhi","email":"NhiHL@fpt.com","inside":"54438","leader":"Nguyễn Hoàng Minh Hiếu","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Phan Ngọc Diệu","email":"DieuPTN2@fpt,.com","inside":"47831","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Lương Thùy Linh","email":"LinhLT110@fpt.com","inside":"68688","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Tuyết Anh","email":"Anhlt185@fpt.com","inside":"53869","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Hoàng Khánh Linh","email":"linhnhk@fpt.com","inside":"46532","leader":"Nguyễn Hoàng Minh Hiếu","department":"Thuốc","team":"Call","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Thị Quỳnh","email":"QuynhNT49@fpt.com","inside":"54948","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Phạm Bích Ngọc","email":"Ngocpb18@fpt.com","inside":"68317","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Phú Thùy Trang","email":"TrangNPT4@fpt.com","inside":"61409","leader":"Võ Thị Ngọc Hân","department":"Thuốc","team":"Call","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Kiều Thùy Linh","email":"LinhKT9@fpt.com","inside":"42661","leader":"Kiều Thùy Linh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Quỳnh Trang","email":"TrangNQ23@fpt.com","inside":"43809","leader":"Kiều Thùy Linh","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Ánh Hồng","email":"HongNTA5@fpt.com","inside":"63106","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"Nguyễn Thị Vân Anh","email":"AnhNTV59@fpt.com","inside":"58474","leader":"Nguyễn Minh Tiến","department":"Thuốc","team":"Chat","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Nguyễn Hồng Khuyên","email":"Khuyennh4@fpt.com","inside":"68586","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"Trịnh Thị Thúy Quỳnh","email":"QuynhTTT12@fpt.com","inside":"68704","leader":"Kim Ánh Ngọc","department":"Thuốc","team":"Chat","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"Nguyễn Ngọc Mai","email":"mainn16@fpt.com","inside":"56535","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trần Ngọc Lan","email":"LanTN2@fpt.com","inside":"47203","leader":"Trần Ngọc Lan","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nông Thị Tuyên","email":"Tuyennt44@fpt.com","inside":"42816","leader":"Nông Thị Tuyên","department":"Thuốc","team":"Tick","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Vũ Đức Thắng","email":"Thangvd22@fpt.com","inside":"66155","leader":"Trần Ngọc Lan","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Phạm Mai Anh","email":"AnhPM8@fpt.com","inside":"58712","leader":"Trần Ngọc Lan","department":"Thuốc","team":"Call","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Thị Hồng Ngọc","email":"NgocNTH74@fpt.com","inside":"68342","leader":"Cù Thị Thu","department":"Thuốc","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Ngọc Diệp","email":"DiepNTN10@fpt.com","inside":"58334","leader":"Trần Ngọc Lan","department":"Thuốc","team":"Call","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trần Thị Khánh Huyền","email":"Huyenttk13@fpt.com","inside":"63998","leader":"Đặng Thu Hà","department":"Thuốc","team":"CMYD","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Châu Thành Công","email":"congct3@fpt.com","inside":"69744","leader":"Nguyễn Đức Trọng","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":5,"category":"Trung bình"},{"year":2026,"month":4,"name":"Trịnh Kim Yến","email":"YenTK3@fpt.com","inside":"69390","leader":"Nguyễn Thị Kim Nguyên","department":"Vaccine","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Lâm Thị Thu Ba","email":"BaLTT2@fpt.com","inside":"68866","leader":"Nguyễn Thị Kim Nguyên","department":"Vaccine","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Nguyễn Đức","email":"ducn5@fpt.com","inside":"63923","leader":"Nguyễn Thị Kim Nguyên","department":"Vaccine","team":"Chat","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Đường Hoài Thương","email":"ThuongDH11@fpt.com","inside":"58872","leader":"Đào Vân Anh","department":"Vaccine","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị MInh Phương","email":"PhuongNTM34@FPR.COM","inside":"58873","leader":"Đào Vân Anh","department":"Vaccine","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trần Gia Hy","email":"Hytg2@fpt.com","inside":"59073","leader":"Đào Vân Anh","department":"Vaccine","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"La Tiểu Bình","email":"binhlt29@fpt.com","inside":"68671","leader":"Đào Vân Anh","department":"Vaccine","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"phạm hải minh","email":"Minhph26@fpt.com","inside":"55586","leader":"Đào Vân Anh","department":"Vaccine","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trịnh Thị Thu Hà","email":"hattt39@fpt.com","inside":"58478","leader":"Trịnh Thị Thu Hà","department":"Vaccine","team":"Vệ tinh","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Huỳnh Thị Tuyết Hạnh","email":"Hanhhtt@fpt.com","inside":"65938","leader":"Huỳnh Thị Tuyết Hạnh","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Bùi Thái Thảo","email":"ThaoBT8@fpt.com","inside":"55123","leader":"Nguyễn Phương Hà","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Phương Hà","email":"HaNP8@fpt.com","inside":"56549","leader":"Nguyễn Phương Hà","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Võ Huỳnh Thuật","email":"Thuatvh2@fpt.com","inside":"59882","leader":"Huỳnh Thị Tuyết Hạnh","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Văn Mai Cơ Owen","email":"OwenNVMC@fpt.com","inside":"57416","leader":"Nguyễn Phương Hà","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Tú Hảo","email":"HaoNTT6@fpt.com","inside":"66257","leader":"Huỳnh Thị Tuyết Hạnh","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"TÔN NỮ XUÂN TÂM","email":"Tamtnx2@fpt.com","inside":"55232","leader":"Lê Ngọc Gia Hân","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Minh Anh","email":"ANHNTM75@gmail.com","inside":"67029","leader":"Đặng Phương Uyên","department":"Vaccine","team":"Chat","score":10,"category":"Giỏi"},{"year":2026,"month":4,"name":"Kha Huệ Nhi","email":"NhiKH@fpt.com","inside":"64434","leader":"Lê Ngọc Gia Hân","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Mỹ Ngọc Duyên","email":"duyennmn2@fpt.com","inside":"68425","leader":"Nguyễn Phương Hà","department":"Vaccine","team":"Vệ tinh","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Huệ Tuyên","email":"TuyenNTH@fpt.com","inside":"55587","leader":"Mang Đức Thùy Vy","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Huỳnh Thị Đoan Thanh","email":"ThanhHTD@fpt.com","inside":"62452","leader":"Đặng Phương Uyên","department":"Vaccine","team":"Chat","score":10,"category":"Giỏi"},{"year":2026,"month":4,"name":"Đặng Thị Thanh Vân","email":"Vandtt24@fpt.com","inside":"67304","leader":"Huỳnh Thị Tuyết Hạnh","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Minh Thư","email":"ThuNTM64@fpt.com","inside":"68432","leader":"Dương Tấn Tài","department":"Vaccine","team":"Chat","score":10,"category":"Giỏi"},{"year":2026,"month":4,"name":"La Mỹ Nhân","email":"nhanlm3@fpt.com","inside":"63997","leader":"Dương Tấn Tài","department":"Vaccine","team":"Chat","score":10,"category":"Giỏi"},{"year":2026,"month":4,"name":"Ngô Thị Kim Hiền","email":"HienNTK4@fpt.com","inside":"63013","leader":"Huỳnh Thị Tuyết Hạnh","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Tuyết","email":"tuyetnt24@fpt.com","inside":"57417","leader":"Dương Tấn Tài","department":"Vaccine","team":"Chat","score":10,"category":"Giỏi"},{"year":2026,"month":4,"name":"Châu Ái My","email":"MyCA@fpt.com","inside":"56286","leader":"Huỳnh Thị Tuyết Hạnh","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Võ Trúc My","email":"Mynvt2@fpt.com","inside":"61218","leader":"Nguyễn Thị Kim Nguyên","department":"Vaccine","team":"Chat","score":6,"category":"Khá"},{"year":2026,"month":4,"name":"HOÀNG THẢO NGUYÊN","email":"NGUYENHT37@FPT.COM","inside":"68429","leader":"Lê Ngọc Gia Hân","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Đoàn Thị Ngọc Trân","email":"trandtn2@fpt.com","inside":"56287","leader":"Lê Ngọc Gia Hân","department":"Vaccine","team":"Vệ tinh","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Lê Hồng Anh Thư","email":"ThuLHA3@fpt.com","inside":"60223","leader":"Nguyễn Đức Trọng","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Ngọc Phương Nguyên","email":"NguyenNNP2@fpt.com","inside":"69244","leader":"Nguyễn Đức Trọng","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trần Thị Kim Toả","email":"ToaTTK@fpt.com","inside":"62451","leader":"Nguyễn Thị Hồng Thắm","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"DƯƠNG QUỲNH THƯƠNG","email":"THUONGDQ2","inside":"56779","leader":"Nguyễn Thị Hồng Thắm","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Hồng Bảo Hân","email":"HanNHB2@gmail.com","inside":"62530","leader":"Dương Tấn Tài","department":"Vaccine","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Trần Thành Phát","email":"PhatTT16@fpt.com","inside":"55694","leader":"Nguyễn Đức Trọng","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Quách Gia Hân","email":"hanqg@fpt.com","inside":"62450","leader":"Đặng Phương Uyên","department":"Vaccine","team":"Chat","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"TRẦN NGỌC ANH THƯ","email":"ThuTNA6@FPT.COM","inside":"68707","leader":"Nguyễn Thị Hồng Thắm","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Trương Nguyễn Ngọc Hằng","email":"HangTNN@fpt.com","inside":"64432","leader":"Dương Tấn Tài","department":"Vaccine","team":"Chat","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Xuân Mai","email":"MaiNTX4@fpt.com","inside":"57201","leader":"Nguyễn Thị Hồng Thắm","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":9,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Cẩm Tú","email":"TuNTC29@fpt.com","inside":"64101","leader":"Nguyễn Thị Hồng Thắm","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Huỳnh Mỹ Kim","email":"KimNHM@fpt.com","inside":"62529","leader":"Mang Đức Thùy Vy","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":6,"category":"Trung bình"},{"year":2026,"month":4,"name":"Huỳnh Khánh Ly","email":"LyHK2@fpt.com","inside":"54627","leader":"Nguyễn Đức Trọng","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Châu Thị Mỹ Linh","email":"LinhCTM2@fpt.com","inside":"64461","leader":"Nguyễn Đức Trọng","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Nguyễn Thị Thanh Hiền","email":"HienNTT86@fpt.com","inside":"56785","leader":"Mang Đức Thùy Vy","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":7,"category":"Khá"},{"year":2026,"month":4,"name":"Lê Trần Ngọc Phương","email":"PhuongLTN14@fpt.com","inside":"62049","leader":"Mang Đức Thùy Vy","department":"Vaccine","team":"Tiếp nhận & Xử lý Vaccine","score":8,"category":"Giỏi"},{"year":2026,"month":4,"name":"Mai Thanh Dịu","email":"DiuMT2@fpt.com","inside":"67020","leader":"Nguyễn Thị Kim Nguyên","department":"Vaccine","team":"Chat","score":5,"category":"Trung bình"}];

// ========= CONSTANTS =========
const TEN_THANG = ["", "Th01", "Th02", "Th03", "Th04", "Th05", "Th06", "Th07", "Th08", "Th09", "Th10", "Th11", "Th12"];
const TEN_THANG_DAY = ["", "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

const BACPHANLOAI = { "Giỏi": 3, "Khá": 2, "Trung bình": 1 };

// Department display names (Vietnamese)
const TEN_PHONG = { "Vaccine": "Vaccine", "Thuốc": "Thuốc" };

// ========= UTILITIES =========
const fmtNum = (v, d = 2) => {
  if (v == null || isNaN(v)) return "—";
  return Number(v).toFixed(d);
};
const fmtPct = (v, d = 1) => {
  if (v == null || isNaN(v)) return "—";
  return `${Number(v).toFixed(d)}%`;
};

// Partition a sorted-descending list into non-overlapping top / bottom halves.
// Rules:
//   n <= 1  → top: all items, bot: empty (one team can't be both best and worst)
//   n == 2  → top: 1, bot: 1
//   n == 3  → top: 1, bot: 1, middle item dropped (it is "average")
//   n >= 4  → top: floor(n/2) capped at maxPerSide, bot: same from the other end
// Items already sorted descending by avg are passed in.
const splitTopBottom = (sortedDesc, maxPerSide = 3) => {
  const n = sortedDesc.length;
  if (n === 0) return { top: [], bot: [] };
  if (n === 1) return { top: [sortedDesc[0]], bot: [] };
  if (n === 2) return { top: [sortedDesc[0]], bot: [sortedDesc[1]] };
  if (n === 3) return { top: [sortedDesc[0]], bot: [sortedDesc[2]] }; // skip the middle
  const half = Math.min(Math.floor(n / 2), maxPerSide);
  const top = sortedDesc.slice(0, half);
  const bot = sortedDesc.slice(n - half).reverse(); // ascending so worst is on top
  return { top, bot };
};

// ========= MULTI-SELECT (Stripe-style) =========
function MultiSelect({ label, options, selected, onChange, placeholder = "Tất cả" }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter(o => o.toLowerCase().includes(q));
  }, [options, query]);

  const allSelected = selected.length === options.length && options.length > 0;
  const summary = selected.length === 0
    ? placeholder
    : allSelected
    ? "Tất cả"
    : selected.length === 1
    ? selected[0]
    : `Đã chọn ${selected.length}`;

  const toggle = (opt) => {
    if (selected.includes(opt)) onChange(selected.filter(x => x !== opt));
    else onChange([...selected, opt]);
  };
  const selectAll = () => onChange(allSelected ? [] : [...options]);
  const clear = (e) => { e.stopPropagation(); onChange([]); setQuery(""); };

  return (
    <div ref={ref} className="relative">
      <label className="block text-[12px] font-medium text-slate-700 mb-1.5">{label}</label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-9 px-3 pr-9 text-left text-[13.5px] bg-white border border-slate-300 rounded-md text-slate-900 transition-all duration-150 flex items-center justify-between hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 shadow-sm"
      >
        <span className={`truncate ${selected.length === 0 ? "text-slate-400" : "text-slate-900"}`}>{summary}</span>
        <span className="flex items-center gap-1 absolute right-2.5 top-1/2 -translate-y-1/2">
          {selected.length > 0 && (
            <span onClick={clear} className="p-0.5 hover:bg-slate-100 rounded cursor-pointer transition-colors" title="Xoá">
              <X size={13} className="text-slate-500 hover:text-slate-900" />
            </span>
          )}
          <ChevronDown size={14} className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-slate-200 rounded-md shadow-lg overflow-hidden ring-1 ring-slate-900/5">
          <div className="p-2 border-b border-slate-100">
            <div className="relative">
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm…"
                className="w-full h-8 pl-8 pr-2 text-[13px] bg-slate-50 border border-slate-200 rounded text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>
          <div className="max-h-64 overflow-y-auto">
            <button
              onClick={selectAll}
              className="w-full px-3 py-2 text-left text-[13px] text-slate-700 hover:bg-slate-50 flex items-center justify-between border-b border-slate-100 font-medium"
            >
              <span>{allSelected ? "Bỏ chọn tất cả" : "Chọn tất cả"}</span>
              <span className="text-[11px] text-slate-400 font-normal">{options.length}</span>
            </button>
            {filtered.length === 0 ? (
              <div className="px-3 py-4 text-[12.5px] text-slate-400 text-center">Không có kết quả phù hợp</div>
            ) : (
              filtered.map(opt => {
                const isSel = selected.includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => toggle(opt)}
                    className="w-full px-3 py-1.5 text-left text-[13px] text-slate-800 hover:bg-slate-50 flex items-center gap-2.5"
                  >
                    <span className={`w-3.5 h-3.5 rounded-[3px] border flex-shrink-0 flex items-center justify-center transition-colors ${isSel ? "bg-indigo-600 border-indigo-600" : "border-slate-300 bg-white"}`}>
                      {isSel && <Check size={9} className="text-white" strokeWidth={3.5} />}
                    </span>
                    <span className="truncate">{opt}</span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ========= KPI CARD =========
function KpiCard({ label, value, sub, hint, accent = "default", trend }) {
  const accentMap = {
    default: "text-slate-900",
    primary: "text-indigo-600",
    good: "text-emerald-600",
    warn: "text-amber-600",
    bad: "text-rose-600",
  };
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <span className="text-[12px] text-slate-500 font-medium">{label}</span>
        {hint && <span className="text-[11px] text-slate-400">{hint}</span>}
      </div>
      <div className={`text-[26px] font-semibold tabular-nums tracking-tight leading-none ${accentMap[accent]}`}>{value}</div>
      <div className="flex items-center justify-between mt-2.5 min-h-[18px]">
        {sub && <span className="text-[12px] text-slate-500">{sub}</span>}
        {trend !== undefined && trend !== null && <Trend delta={trend} />}
      </div>
    </div>
  );
}

// ========= TREND PILL =========
function Trend({ delta, suffix = "" }) {
  if (delta == null || isNaN(delta)) return null;
  if (Math.abs(delta) < 0.05) return (
    <span className="inline-flex items-center gap-1 text-[11.5px] text-slate-500 tabular-nums font-medium">
      <Minus size={11} /> {fmtNum(delta, 2)}{suffix}
    </span>
  );
  if (delta > 0) return (
    <span className="inline-flex items-center gap-1 text-[11.5px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded tabular-nums font-medium">
      <TrendingUp size={11} /> +{fmtNum(delta, 2)}{suffix}
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 text-[11.5px] text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded tabular-nums font-medium">
      <TrendingDown size={11} /> {fmtNum(delta, 2)}{suffix}
    </span>
  );
}

// ========= CATEGORY PILL =========
function CategoryPill({ category, size = "sm" }) {
  if (!category) return null;
  const styles = {
    "Giỏi": "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    "Khá": "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
    "Trung bình": "bg-amber-50 text-amber-700 ring-amber-600/20",
  };
  const sizing = size === "sm" ? "px-1.5 py-0.5 text-[10.5px]" : "px-2 py-0.5 text-[11.5px]";
  return (
    <span className={`inline-flex items-center font-medium rounded ring-1 ring-inset ${sizing} ${styles[category] || "bg-slate-100 text-slate-700"}`}>
      {category}
    </span>
  );
}

// ========= LABELED HORIZONTAL BAR (always shows numbers) =========
function LabeledBar({ label, sublabel, value, max, color = "indigo", suffix = "", count, rank }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  const colorMap = {
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
    slate: "bg-slate-500",
  };
  return (
    <div className="group">
      <div className="flex items-baseline justify-between mb-1.5 gap-3">
        <div className="flex items-baseline gap-2 min-w-0 flex-1">
          {rank && <span className="text-[11px] font-mono text-slate-400 tabular-nums flex-shrink-0">{rank}</span>}
          <span className="text-[13px] text-slate-800 font-medium truncate">{label}</span>
          {sublabel && <span className="text-[11px] text-slate-500 truncate flex-shrink-0">{sublabel}</span>}
        </div>
        <div className="flex items-baseline gap-2 flex-shrink-0">
          <span className="text-[13px] font-semibold text-slate-900 tabular-nums">{typeof value === "number" ? fmtNum(value, value % 1 === 0 ? 0 : 2) : value}{suffix}</span>
          {count !== undefined && <span className="text-[11px] text-slate-400 tabular-nums">({count})</span>}
        </div>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorMap[color]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${Math.max(2, Math.min(100, pct))}%` }}
        />
      </div>
    </div>
  );
}

// ========= STACKED PERCENT BAR (with inline labels) =========
function StackedBar({ segments, total }) {
  // segments: [{label, value, color}]
  if (!total || total === 0) return <div className="h-6 bg-slate-100 rounded" />;
  return (
    <div>
      <div className="flex h-6 rounded overflow-hidden ring-1 ring-slate-900/5">
        {segments.map((s, i) => {
          const pct = (s.value / total) * 100;
          if (pct < 0.5) return null;
          return (
            <div
              key={i}
              className={`${s.color} flex items-center justify-center text-white text-[11px] font-semibold tabular-nums`}
              style={{ width: `${pct}%` }}
              title={`${s.label}: ${s.value} (${pct.toFixed(1)}%)`}
            >
              {pct >= 8 && <span>{pct.toFixed(0)}%</span>}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
        {segments.map((s, i) => (
          <div key={i} className="flex items-center gap-1.5 text-[11.5px]">
            <span className={`w-2 h-2 rounded-sm ${s.color}`} />
            <span className="text-slate-600">{s.label}</span>
            <span className="text-slate-900 font-semibold tabular-nums">{s.value}</span>
            <span className="text-slate-400 tabular-nums">({total > 0 ? ((s.value / total) * 100).toFixed(1) : "0"}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========= SORTABLE TABLE =========
function SortableTable({ columns, rows, defaultSort, highlightTopIds, highlightBottomIds, emptyText = "Không có dữ liệu phù hợp với bộ lọc hiện tại." }) {
  const [sort, setSort] = useState(defaultSort || { key: columns[0].key, dir: "desc" });

  const sorted = useMemo(() => {
    const arr = [...rows];
    arr.sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      let cmp;
      if (av == null && bv == null) cmp = 0;
      else if (av == null) cmp = 1;
      else if (bv == null) cmp = -1;
      else if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av).localeCompare(String(bv), "vi");
      return sort.dir === "asc" ? cmp : -cmp;
    });
    return arr;
  }, [rows, sort]);

  const setKey = (key) => {
    if (sort.key === key) setSort({ key, dir: sort.dir === "asc" ? "desc" : "asc" });
    else setSort({ key, dir: "desc" });
  };

  const topSet = new Set(highlightTopIds || []);
  const botSet = new Set(highlightBottomIds || []);

  return (
    <div className="overflow-auto rounded-lg border border-slate-200 bg-white">
      <table className="w-full text-[13px]">
        <thead className="bg-slate-50/80 border-b border-slate-200">
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                onClick={() => setKey(col.key)}
                className={`px-3 py-2.5 text-left text-[11.5px] font-semibold text-slate-600 hover:text-slate-900 cursor-pointer select-none transition-colors ${col.align === "right" ? "text-right" : ""}`}
                style={{ width: col.width }}
              >
                <span className={`inline-flex items-center gap-1 ${col.align === "right" ? "flex-row-reverse" : ""}`}>
                  {col.label}
                  {sort.key === col.key ? (
                    sort.dir === "asc" ? <ChevronUp size={11} className="text-indigo-600" /> : <ChevronDown size={11} className="text-indigo-600" />
                  ) : (
                    <ArrowUpDown size={10} className="text-slate-300" />
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-3 py-10 text-center text-slate-400 text-[13px]">{emptyText}</td>
            </tr>
          )}
          {sorted.map((row, i) => {
            const isTop = topSet.has(row._id);
            const isBot = botSet.has(row._id);
            return (
              <tr
                key={row._id || i}
                className={`border-b border-slate-100 last:border-b-0 transition-colors ${
                  isTop ? "bg-emerald-50/40 hover:bg-emerald-50/70" :
                  isBot ? "bg-rose-50/30 hover:bg-rose-50/60" :
                  "hover:bg-slate-50"
                }`}
              >
                {columns.map(col => (
                  <td key={col.key} className={`px-3 py-2.5 text-slate-800 ${col.align === "right" ? "text-right tabular-nums" : ""} ${col.mono ? "font-mono text-[12.5px]" : ""}`}>
                    {col.render ? col.render(row, { isTop, isBot }) : row[col.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ========= EMPTY STATE / FAIL-SAFE =========
function NotEnoughData({ msg = "Không đủ dữ liệu để phân tích" }) {
  return (
    <div className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-6 text-center">
      <Info size={18} className="text-slate-400 mx-auto mb-2" />
      <p className="text-[13px] text-slate-600">{msg}</p>
    </div>
  );
}

// ========= SECTION HEADER =========
function SectionHeader({ icon: Icon, title, subtitle, accent = "slate", right }) {
  const accentMap = {
    slate: "text-slate-700",
    indigo: "text-indigo-600",
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    rose: "text-rose-600",
  };
  return (
    <div className="flex items-end justify-between mb-3">
      <div>
        <div className="flex items-center gap-2">
          {Icon && <Icon size={15} className={accentMap[accent]} />}
          <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight">{title}</h3>
        </div>
        {subtitle && <p className="text-[12px] text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
      {right}
    </div>
  );
}

// ========= COMMON MISTAKES TAB =========
function CommonMistakesTab() {
  const vaccine = [
    { q: "Vaccine hiếm", a: "Sale chỉ được tạo đơn mới khi khách thanh toán 100% online." },
    { q: "Đổi lịch để né phí", a: "Hệ thống cho phép đổi lịch và sẽ tự tính lại phí theo ngày mới." },
    {
      q: "Chính sách lịch tiêm",
      a: "Khoảng thời gian hợp lệ giữa các mũi tiêm:",
      list: [
        "Mũi lẻ: từ 31 ngày",
        "Gói: từ 91 ngày",
        "Tối đa: 180 ngày",
      ],
    },
  ];
  const medicine = [
    { q: "Hoàn điểm tích luỹ", a: "Điểm sẽ được hoàn lại cho người đã thanh toán đơn hàng." },
    { q: "Yêu cầu đăng nhập", a: "Bắt buộc đăng nhập trên cả Web lẫn App để thực hiện giao dịch." },
    { q: "Voucher MoMo & ZaloPay", a: "Có thể dùng kết hợp với chương trình Flash Sale." },
  ];

  const Block = ({ title, icon: Icon, items, accent }) => (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
      <div className={`px-4 py-3 border-b border-slate-200 flex items-center gap-2 ${accent === "vaccine" ? "bg-indigo-50/50" : "bg-emerald-50/50"}`}>
        <Icon size={16} className={accent === "vaccine" ? "text-indigo-600" : "text-emerald-600"} />
        <h3 className="text-[14px] font-semibold text-slate-900 tracking-tight">{title}</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {items.map((it, i) => (
          <div key={i} className="px-4 py-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded bg-slate-100 text-slate-600 text-[10.5px] font-mono font-semibold flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[13.5px] font-semibold text-slate-900 mb-1">{it.q}</div>
                <div className="text-[13px] text-slate-600 leading-relaxed">{it.a}</div>
                {it.list && (
                  <ul className="mt-2 space-y-1">
                    {it.list.map((li, j) => (
                      <li key={j} className="text-[12.5px] text-slate-700 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3 p-4 bg-amber-50/60 border border-amber-200 rounded-lg">
        <FileWarning size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <h2 className="text-[14px] font-semibold text-slate-900 tracking-tight">Câu hỏi thường sai — Tài liệu tham chiếu</h2>
          <p className="text-[12.5px] text-slate-600 mt-0.5">Tổng hợp các nội dung dễ trả lời sai theo phòng ban. Dùng để ôn tập trước các phiên đánh giá.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Block title="Vaccine" icon={Syringe} items={vaccine} accent="vaccine" />
        <Block title="Thuốc" icon={Pill} items={medicine} accent="medicine" />
      </div>
    </div>
  );
}
// ========= MAIN APP =========
export default function App() {
  // ----- Filter state -----
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [teams, setTeams] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [tab, setTab] = useState("overview"); // overview | mistakes

  // ----- Cascading option lists -----
  const optionsFor = (excludeKey) => {
    return RAW.filter(r => {
      if (excludeKey !== "year" && years.length && !years.includes(r.year)) return false;
      if (excludeKey !== "month" && months.length && !months.includes(r.month)) return false;
      if (excludeKey !== "department" && departments.length && !departments.includes(r.department)) return false;
      if (excludeKey !== "team" && teams.length && !teams.includes(r.team)) return false;
      if (excludeKey !== "leader" && leaders.length && !leaders.includes(r.leader)) return false;
      if (excludeKey !== "salesperson" && salespeople.length && !salespeople.includes(r.name)) return false;
      return true;
    });
  };

  const yearOpts = useMemo(() => Array.from(new Set(optionsFor("year").map(r => r.year))).sort((a, b) => a - b), [months, departments, teams, leaders, salespeople]);
  const monthOpts = useMemo(() => Array.from(new Set(optionsFor("month").map(r => r.month))).sort((a, b) => a - b), [years, departments, teams, leaders, salespeople]);
  const deptOpts = useMemo(() => Array.from(new Set(optionsFor("department").map(r => r.department))).sort(), [years, months, teams, leaders, salespeople]);
  const teamOpts = useMemo(() => Array.from(new Set(optionsFor("team").map(r => r.team))).sort(), [years, months, departments, leaders, salespeople]);
  const leaderOpts = useMemo(() => Array.from(new Set(optionsFor("leader").map(r => r.leader))).filter(Boolean).sort(), [years, months, departments, teams, salespeople]);
  const personOpts = useMemo(() => Array.from(new Set(optionsFor("salesperson").map(r => r.name))).filter(Boolean).sort(), [years, months, departments, teams, leaders]);

  // ----- Apply filters -----
  const filtered = useMemo(() => {
    return RAW.filter(r => {
      if (years.length && !years.includes(r.year)) return false;
      if (months.length && !months.includes(r.month)) return false;
      if (departments.length && !departments.includes(r.department)) return false;
      if (teams.length && !teams.includes(r.team)) return false;
      if (leaders.length && !leaders.includes(r.leader)) return false;
      if (salespeople.length && !salespeople.includes(r.name)) return false;
      return true;
    }).map((r, i) => ({ ...r, _id: `${r.year}-${r.month}-${r.email || r.name}-${i}` }));
  }, [years, months, departments, teams, leaders, salespeople]);

  const activeFilterCount = years.length + months.length + departments.length + teams.length + leaders.length + salespeople.length;
  const clearAll = () => { setYears([]); setMonths([]); setDepartments([]); setTeams([]); setLeaders([]); setSalespeople([]); };

  // ===== CONTEXT LEVEL DETECTION =====
  // L4 Individual: exactly one salesperson narrows the data; OR salesperson filter has 1 selected.
  // L3 Leader: leaders filter set (and not narrowed to single person).
  // L2 Team: teams filter set.
  // L1 Department: departments filter set (and only one selected for true "department view").
  // L0 Overview: otherwise.
  const uniquePeople = useMemo(() => Array.from(new Set(filtered.map(r => r.name))), [filtered]);
  const uniqueLeaders = useMemo(() => Array.from(new Set(filtered.map(r => r.leader))), [filtered]);
  const uniqueTeams = useMemo(() => Array.from(new Set(filtered.map(r => `${r.department}||${r.team}`))), [filtered]);
  const uniqueDepts = useMemo(() => Array.from(new Set(filtered.map(r => r.department))), [filtered]);

  let contextLevel = 0;
  let contextLabel = "Tổng quan";
  let contextEntity = null;
  if (salespeople.length === 1 || uniquePeople.length === 1) {
    contextLevel = 4;
    contextLabel = "Cá nhân";
    contextEntity = salespeople[0] || uniquePeople[0];
  } else if (leaders.length >= 1) {
    contextLevel = 3;
    contextLabel = "Trưởng nhóm";
    contextEntity = leaders.length === 1 ? leaders[0] : `${leaders.length} trưởng nhóm`;
  } else if (teams.length >= 1) {
    contextLevel = 2;
    contextLabel = "Team";
    contextEntity = teams.length === 1 ? teams[0] : `${teams.length} team`;
  } else if (departments.length === 1) {
    contextLevel = 1;
    contextLabel = "Phòng ban";
    contextEntity = TEN_PHONG[departments[0]] || departments[0];
  }
  const isIndividual = contextLevel === 4;

  // ===== CORE STATS =====
  const stats = useMemo(() => {
    const valid = filtered.filter(r => typeof r.score === "number");
    const n = filtered.length;
    const avg = valid.length ? valid.reduce((s, r) => s + r.score, 0) / valid.length : 0;
    const cats = { "Giỏi": 0, "Khá": 0, "Trung bình": 0 };
    filtered.forEach(r => { if (cats[r.category] !== undefined) cats[r.category]++; });
    return {
      n,
      validN: valid.length,
      avg,
      cats,
      pctExcellent: n ? (cats["Giỏi"] / n) * 100 : 0,
      pctGood: n ? (cats["Khá"] / n) * 100 : 0,
      pctAverage: n ? (cats["Trung bình"] / n) * 100 : 0,
    };
  }, [filtered]);

  // Overall avg across the unfiltered respect-only-time slice (year/month) — for benchmark deltas
  const benchmarkRows = useMemo(() => {
    return RAW.filter(r => {
      if (years.length && !years.includes(r.year)) return false;
      if (months.length && !months.includes(r.month)) return false;
      return true;
    });
  }, [years, months]);
  const benchmarkAvg = useMemo(() => {
    const v = benchmarkRows.filter(r => typeof r.score === "number");
    return v.length ? v.reduce((s, r) => s + r.score, 0) / v.length : 0;
  }, [benchmarkRows]);

  // ===== TEAM AGGREGATE (in current scope) =====
  const aggregate = (rows, keyFn, extraKeys = {}) => {
    const map = new Map();
    rows.forEach(r => {
      const key = keyFn(r);
      if (!map.has(key)) map.set(key, { _key: key, scores: [], cats: { "Giỏi": 0, "Khá": 0, "Trung bình": 0 }, count: 0, ...extraKeys(r) });
      const v = map.get(key);
      v.count++;
      if (typeof r.score === "number") v.scores.push(r.score);
      if (v.cats[r.category] !== undefined) v.cats[r.category]++;
    });
    return Array.from(map.values()).map(v => ({
      ...v,
      avg: v.scores.length ? v.scores.reduce((s, x) => s + x, 0) / v.scores.length : 0,
      pctExcellent: v.count ? (v.cats["Giỏi"] / v.count) * 100 : 0,
      pctGood: v.count ? (v.cats["Khá"] / v.count) * 100 : 0,
      pctAverage: v.count ? (v.cats["Trung bình"] / v.count) * 100 : 0,
    }));
  };

  const teamAgg = useMemo(() => aggregate(filtered, r => `${r.department}||${r.team}`, r => ({ dept: r.department, team: r.team })).map(t => ({ ...t, _id: t._key })), [filtered]);
  const leaderAgg = useMemo(() => aggregate(filtered, r => r.leader, r => ({ leader: r.leader, dept: r.department, team: r.team })).map(t => ({ ...t, _id: t._key })), [filtered]);
  const personAgg = useMemo(() => aggregate(filtered, r => r.name, r => ({ name: r.name, dept: r.department, team: r.team, leader: r.leader, category: r.category })).map(t => ({ ...t, _id: t._key })), [filtered]);

  // ===== MOM (only for L1 Department view) =====
  const momRows = useMemo(() => {
    if (contextLevel !== 1 || !departments[0]) return [];
    const dept = departments[0];
    const slice = RAW.filter(r => {
      if (r.department !== dept) return false;
      if (years.length && !years.includes(r.year)) return false;
      // Don't filter by month here so we can compare across months
      if (teams.length && !teams.includes(r.team)) return false;
      if (leaders.length && !leaders.includes(r.leader)) return false;
      if (salespeople.length && !salespeople.includes(r.name)) return false;
      return true;
    });
    const byMonth = new Map();
    slice.forEach(r => {
      const key = `${r.year}-${String(r.month).padStart(2, "0")}`;
      if (!byMonth.has(key)) byMonth.set(key, { key, year: r.year, month: r.month, scores: [], n: 0, cats: { "Giỏi": 0, "Khá": 0, "Trung bình": 0 } });
      const v = byMonth.get(key);
      v.n++;
      if (typeof r.score === "number") v.scores.push(r.score);
      if (v.cats[r.category] !== undefined) v.cats[r.category]++;
    });
    return Array.from(byMonth.values())
      .sort((a, b) => a.key.localeCompare(b.key))
      .map(v => ({ ...v, avg: v.scores.length ? v.scores.reduce((s, x) => s + x, 0) / v.scores.length : 0 }));
  }, [contextLevel, departments, years, teams, leaders, salespeople]);

  // ===== INSIGHTS GENERATION (context-aware) =====
  // Validity: ≥3 entities to compare AND meaningful difference (>120% or <80% of mean)
  const buildInsights = () => {
    if (isIndividual) {
      // L4 Individual: personal perf only
      const me = filtered.filter(r => typeof r.score === "number");
      if (me.length === 0) return { type: "none" };
      const myAvg = me.reduce((s, r) => s + r.score, 0) / me.length;
      const myCat = me[me.length - 1].category;
      const trend = me.length >= 2 ? (me[me.length - 1].score - me[0].score) : null;
      // Find peers: same team, different person
      const peerScope = RAW.filter(r =>
        r.department === me[0].department &&
        r.team === me[0].team &&
        r.name !== me[0].name &&
        typeof r.score === "number" &&
        (years.length === 0 || years.includes(r.year)) &&
        (months.length === 0 || months.includes(r.month))
      );
      const peerAvg = peerScope.length ? peerScope.reduce((s, r) => s + r.score, 0) / peerScope.length : null;
      return {
        type: "individual",
        name: me[0].name,
        team: me[0].team,
        dept: me[0].department,
        leader: me[0].leader,
        myAvg,
        myCat,
        trend,
        peerAvg,
        records: me.length,
      };
    }

    if (contextLevel === 3) {
      // L3 Leader: leader perf + team distribution
      if (leaderAgg.length === 0) return { type: "none" };
      // For each leader in scope, examine their team's spread
      const items = leaderAgg.filter(l => l.scores.length >= 1).map(l => {
        return {
          leader: l.leader,
          dept: l.dept,
          team: l.team,
          avg: l.avg,
          count: l.count,
          pctExcellent: l.pctExcellent,
          pctAverage: l.pctAverage,
          delta: benchmarkAvg ? l.avg - benchmarkAvg : 0,
        };
      }).sort((a, b) => b.avg - a.avg);
      return { type: "leader", items, benchmark: benchmarkAvg };
    }

    if (contextLevel === 2) {
      // L2 Team: team insight + leader-level breakdown within team(s)
      if (leaderAgg.length < 2) {
        // Only one leader in this team — fall back to team-level insight
        if (teamAgg.length === 0) return { type: "none" };
        const items = teamAgg.map(t => ({
          team: t.team, dept: t.dept, avg: t.avg, count: t.count,
          pctExcellent: t.pctExcellent, pctAverage: t.pctAverage,
          delta: benchmarkAvg ? t.avg - benchmarkAvg : 0,
        }));
        return { type: "team-single", items, benchmark: benchmarkAvg };
      }
      const items = leaderAgg.filter(l => l.scores.length >= 1).map(l => ({
        leader: l.leader, dept: l.dept, team: l.team, avg: l.avg, count: l.count,
        pctExcellent: l.pctExcellent, pctAverage: l.pctAverage,
        delta: benchmarkAvg ? l.avg - benchmarkAvg : 0,
      })).sort((a, b) => b.avg - a.avg);
      return { type: "team-leaders", items, benchmark: benchmarkAvg };
    }

    if (contextLevel === 1) {
      // L1 Department: dept insight + top teams within dept
      if (teamAgg.length < 3) return { type: "insufficient" };
      const valids = teamAgg.filter(t => t.scores.length >= 3);
      if (valids.length < 3) return { type: "insufficient" };
      const mean = valids.reduce((s, t) => s + t.avg, 0) / valids.length;
      // Only meaningful if >120% or <80% of mean
      const meaningful = valids.filter(t => mean > 0 && (t.avg / mean > 1.10 || t.avg / mean < 0.90));
      const sorted = [...valids].sort((a, b) => b.avg - a.avg);
      return {
        type: "department",
        dept: departments[0],
        items: sorted,
        deptAvg: stats.avg,
        benchmark: benchmarkAvg,
        meaningful,
      };
    }

    // L0 Overview: system-wide insights
    if (teamAgg.length < 3) return { type: "insufficient" };
    const valids = teamAgg.filter(t => t.scores.length >= 3);
    if (valids.length < 3) return { type: "insufficient" };
    const mean = valids.reduce((s, t) => s + t.avg, 0) / valids.length;
    const meaningful = valids.filter(t => mean > 0 && (t.avg / mean > 1.10 || t.avg / mean < 0.90));
    const sorted = [...valids].sort((a, b) => b.avg - a.avg);
    return {
      type: "overview",
      items: sorted,
      systemAvg: stats.avg,
      meaningful,
    };
  };
  const insights = useMemo(buildInsights, [filtered, contextLevel, isIndividual, teamAgg, leaderAgg, stats.avg, benchmarkAvg, departments, years, months]);

  // ===== RANKING (only when ≥5 entities AND not individual) =====
  // Decide entity granularity: L0/L1 use teams; L2 uses leaders; L3 uses people.
  let rankingMode = "none";
  let rankingEntities = [];
  if (!isIndividual) {
    if (contextLevel === 0 || contextLevel === 1) {
      rankingMode = "team";
      rankingEntities = teamAgg.filter(t => t.scores.length >= 1);
    } else if (contextLevel === 2) {
      rankingMode = "leader";
      rankingEntities = leaderAgg.filter(t => t.scores.length >= 1);
    } else if (contextLevel === 3) {
      rankingMode = "person";
      rankingEntities = personAgg.filter(t => t.scores.length >= 1);
    }
  }
  const showRanking = !isIndividual && rankingEntities.length >= 5;
  const rankingTop5 = useMemo(() => [...rankingEntities].sort((a, b) => b.avg - a.avg).slice(0, 5), [rankingEntities]);
  const rankingBot5 = useMemo(() => [...rankingEntities].sort((a, b) => a.avg - b.avg).slice(0, 5), [rankingEntities]);

  // ===== Person table (for L1, L2, L3) =====
  const personColumns = [
    { key: "name", label: "Họ và tên", render: (r) => <span className="text-slate-900 font-medium">{r.name}</span> },
    { key: "department", label: "Phòng", render: (r) => <span className="text-slate-600">{TEN_PHONG[r.department] || r.department}</span> },
    { key: "team", label: "Team", render: (r) => <span className="text-slate-700">{r.team}</span> },
    { key: "leader", label: "Trưởng nhóm", render: (r) => <span className="text-slate-600">{r.leader}</span> },
    { key: "month", label: "Kỳ", render: (r) => <span className="text-slate-500 font-mono text-[12px]">{TEN_THANG[r.month]}/{r.year}</span> },
    { key: "score", label: "Điểm", align: "right", render: (r, { isTop, isBot }) => (
      <span className={`font-semibold tabular-nums ${isTop ? "text-emerald-600" : isBot ? "text-rose-600" : "text-slate-900"}`}>
        {r.score != null ? r.score.toFixed(0) : "—"}
      </span>
    )},
    { key: "category", label: "Phân loại", align: "right", render: (r) => <CategoryPill category={r.category} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased" style={{ fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontFeatureSettings: "'cv11', 'ss01'" }}>
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
              <BarChart3 size={14} className="text-white" />
            </div>
            <div>
              <h1 className="text-[14px] font-semibold tracking-tight text-slate-900 leading-none">Sales Operation Skills Survey Results Dashboard</h1>
              <p className="text-[11.5px] text-slate-500 mt-0.5">Bảng theo dõi hiệu suất nhân viên</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11.5px] text-slate-500 hidden sm:inline-flex items-center gap-1.5">
              <span className="font-mono font-semibold text-slate-700 tabular-nums">{filtered.length}</span>
              bản ghi
              <span className="text-slate-300">·</span>
              <span>TB <span className="font-mono font-semibold text-slate-700 tabular-nums">{fmtNum(stats.avg)}</span></span>
            </span>
          </div>
        </div>
        {/* Tabs */}
        <div className="max-w-[1500px] mx-auto px-6 flex items-center gap-1 border-t border-slate-100">
          {[
            { id: "overview", label: "Tổng quan", icon: LayoutDashboard },
            { id: "mistakes", label: "Câu hỏi thường sai", icon: FileWarning },
          ].map(t => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative h-10 px-3 text-[13px] flex items-center gap-1.5 transition-colors ${active ? "text-indigo-600 font-medium" : "text-slate-600 hover:text-slate-900"}`}
              >
                <Icon size={13} />
                {t.label}
                {active && <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-indigo-600 rounded-t" />}
              </button>
            );
          })}
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto px-6 py-6">
        {/* Filters */}
        <section className="mb-5 bg-white border border-slate-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-slate-500" />
              <h2 className="text-[13px] font-semibold text-slate-900">Bộ lọc</h2>
              {activeFilterCount > 0 && (
                <span className="text-[11px] font-mono px-1.5 py-0.5 bg-indigo-50 text-indigo-700 rounded ring-1 ring-inset ring-indigo-600/20 font-semibold tabular-nums">
                  {activeFilterCount}
                </span>
              )}
              <span className="ml-2 inline-flex items-center gap-1.5 text-[11.5px] text-slate-500">
                <span className="text-slate-400">Cấp độ:</span>
                <span className="font-medium text-slate-700">{contextLabel}</span>
                {contextEntity && <span className="text-slate-400">· {contextEntity}</span>}
              </span>
            </div>
            {activeFilterCount > 0 && (
              <button onClick={clearAll} className="text-[12px] text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors">
                <X size={12} /> Xoá toàn bộ bộ lọc
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <MultiSelect label="Năm" options={yearOpts.map(String)} selected={years.map(String)} onChange={(v) => setYears(v.map(Number))} />
            <MultiSelect label="Tháng" options={monthOpts.map(m => TEN_THANG_DAY[m])} selected={months.map(m => TEN_THANG_DAY[m])} onChange={(v) => setMonths(v.map(l => TEN_THANG_DAY.indexOf(l)))} />
            <MultiSelect label="Phòng ban" options={deptOpts} selected={departments} onChange={setDepartments} />
            <MultiSelect label="Team" options={teamOpts} selected={teams} onChange={setTeams} />
            <MultiSelect label="Trưởng nhóm" options={leaderOpts} selected={leaders} onChange={setLeaders} />
            <MultiSelect label="Nhân viên" options={personOpts} selected={salespeople} onChange={setSalespeople} />
          </div>
        </section>

        {tab === "mistakes" && <CommonMistakesTab />}

        {tab === "overview" && (
          <>
            {/* SECTION 1 — INSIGHTS & RECOMMENDATIONS (TOP PRIORITY) */}
            <InsightsSection insights={insights} contextLevel={contextLevel} contextEntity={contextEntity} stats={stats} />

            {/* SECTION 2 — KPI SUMMARY */}
            <section className="mb-6">
              <SectionHeader icon={Target} title="Chỉ số tổng hợp" subtitle="Số liệu chính trong phạm vi bộ lọc hiện tại" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <KpiCard label="Số bản ghi" value={stats.n} sub={`${stats.validN} có điểm hợp lệ`} />
                <KpiCard
                  label="Điểm trung bình"
                  value={fmtNum(stats.avg)}
                  sub="trên thang 10"
                  accent="primary"
                  trend={contextLevel >= 1 && benchmarkAvg ? stats.avg - benchmarkAvg : null}
                />
                <KpiCard label="Tỷ lệ Giỏi" value={fmtPct(stats.pctExcellent)} sub={`${stats.cats["Giỏi"]} người`} accent="good" />
                <KpiCard label="Tỷ lệ Trung bình" value={fmtPct(stats.pctAverage)} sub={`${stats.cats["Trung bình"]} cần lưu ý`} accent="warn" />
              </div>
            </section>

            {/* SECTION 3 — CHARTS */}
            {!isIndividual && (
              <ChartsSection
                stats={stats}
                teamAgg={teamAgg}
                leaderAgg={leaderAgg}
                contextLevel={contextLevel}
                momRows={momRows}
                departments={departments}
              />
            )}
            {isIndividual && (
              <IndividualSection filtered={filtered} contextEntity={contextEntity} />
            )}

            {/* SECTION 4 — RANKING (conditional) */}
            {showRanking && (
              <RankingSection
                top5={rankingTop5}
                bot5={rankingBot5}
                mode={rankingMode}
                contextLevel={contextLevel}
              />
            )}

            {/* SECTION 5 — DETAIL TABLE (only inside Department/Team/Leader) */}
            {(contextLevel === 1 || contextLevel === 2 || contextLevel === 3) && (
              <section className="mb-6">
                <SectionHeader
                  icon={Users}
                  title="Chi tiết nhân viên"
                  subtitle="Nhấn vào tiêu đề cột để sắp xếp tăng/giảm dần"
                  right={<span className="text-[11.5px] text-slate-500 tabular-nums">{filtered.length} bản ghi</span>}
                />
                <SortableTable
                  rows={filtered}
                  columns={personColumns}
                  defaultSort={{ key: "score", dir: "desc" }}
                  highlightTopIds={
                    filtered.length >= 5
                      ? [...filtered].filter(r => typeof r.score === "number")
                          .sort((a, b) => b.score - a.score || (BACPHANLOAI[b.category] || 0) - (BACPHANLOAI[a.category] || 0))
                          .slice(0, 5).map(r => r._id)
                      : []
                  }
                  highlightBottomIds={
                    filtered.length >= 5
                      ? [...filtered].filter(r => typeof r.score === "number")
                          .sort((a, b) => a.score - b.score || (BACPHANLOAI[a.category] || 0) - (BACPHANLOAI[b.category] || 0))
                          .slice(0, 5).map(r => r._id)
                      : []
                  }
                />
              </section>
            )}
          </>
        )}
      </main>

      <footer className="border-t border-slate-200 mt-12 py-5 px-6 bg-white">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between text-[11.5px] text-slate-500">
          <span>Dashboard năng suất nhân viên · {RAW.length} bản ghi đã tải</span>
          <span className="font-mono">v2.0</span>
        </div>
      </footer>
    </div>
  );
}

// ========= INSIGHTS SECTION (TOP) =========
function InsightsSection({ insights, contextLevel, contextEntity, stats }) {
  return (
    <section className="mb-6">
      <SectionHeader
        icon={Sparkles}
        title="Phân tích & đề xuất"
        subtitle={
          contextLevel === 0 ? "Nhận xét tự động trên toàn hệ thống" :
          contextLevel === 1 ? `Nhận xét cho phòng ${contextEntity}` :
          contextLevel === 2 ? `Nhận xét cho phạm vi ${contextEntity}` :
          contextLevel === 3 ? `Nhận xét cho ${contextEntity}` :
          `Nhận xét cá nhân — ${contextEntity}`
        }
        accent="indigo"
      />

      {insights.type === "none" || insights.type === "insufficient" ? (
        <NotEnoughData />
      ) : insights.type === "individual" ? (
        <IndividualInsight ins={insights} />
      ) : insights.type === "leader" ? (
        <LeaderInsight ins={insights} />
      ) : insights.type === "team-leaders" ? (
        <TeamLeadersInsight ins={insights} />
      ) : insights.type === "team-single" ? (
        <TeamSingleInsight ins={insights} />
      ) : insights.type === "department" ? (
        <DepartmentInsight ins={insights} />
      ) : (
        <OverviewInsight ins={insights} />
      )}
    </section>
  );
}

function InsightCard({ tone, icon: Icon, title, children }) {
  const tones = {
    good: "bg-emerald-50/60 border-emerald-200",
    warn: "bg-amber-50/60 border-amber-200",
    bad: "bg-rose-50/60 border-rose-200",
    info: "bg-indigo-50/60 border-indigo-200",
    neutral: "bg-white border-slate-200",
  };
  const iconTone = {
    good: "text-emerald-600",
    warn: "text-amber-600",
    bad: "text-rose-600",
    info: "text-indigo-600",
    neutral: "text-slate-600",
  };
  return (
    <div className={`border rounded-lg p-4 ${tones[tone]}`}>
      <div className="flex items-start gap-3">
        <Icon size={16} className={`flex-shrink-0 mt-0.5 ${iconTone[tone]}`} />
        <div className="flex-1 min-w-0">
          {title && <h4 className={`text-[13px] font-semibold text-slate-900 mb-1`}>{title}</h4>}
          <div className="text-[13px] text-slate-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function OverviewInsight({ ins }) {
  const { top, bot } = splitTopBottom(ins.items, 3);
  const meaningful = ins.meaningful || [];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <InsightCard tone="good" icon={Award} title="Top Performing Teams">
        {top.length === 0 ? (
          <span className="text-slate-500">Không có dữ liệu</span>
        ) : top.map((t, i) => (
          <div key={t._id} className="flex items-center justify-between py-1 first:pt-0 last:pb-0 border-t border-emerald-200/60 first:border-t-0">
            <span><span className="font-semibold text-slate-900">{t.team}</span> <span className="text-slate-500">· {TEN_PHONG[t.dept] || t.dept}</span></span>
            <span className="font-semibold tabular-nums text-emerald-700">{fmtNum(t.avg)}</span>
          </div>
        ))}
      </InsightCard>
      <InsightCard tone="warn" icon={AlertTriangle} title="Team cần được hỗ trợ thêm">
        {bot.length === 0 ? (
          <span className="text-slate-500">Chưa có team nào ở nhóm cần hỗ trợ</span>
        ) : bot.map((t, i) => (
          <div key={t._id} className="flex items-center justify-between py-1 first:pt-0 last:pb-0 border-t border-amber-200/60 first:border-t-0">
            <span><span className="font-semibold text-slate-900">{t.team}</span> <span className="text-slate-500">· {TEN_PHONG[t.dept] || t.dept}</span></span>
            <span className="font-semibold tabular-nums text-amber-700">{fmtNum(t.avg)}</span>
          </div>
        ))}
      </InsightCard>
      {meaningful.length > 0 && (
        <div className="lg:col-span-2">
          <InsightCard tone="info" icon={Lightbulb} title="Khuyến nghị">
            <ul className="space-y-1.5">
              {meaningful.slice(0, 4).map((t, i) => {
                const ratio = ins.systemAvg > 0 ? t.avg / ins.systemAvg : 1;
                return (
                  <li key={t._id} className="flex items-start gap-2">
                    <ChevronRight size={13} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Team <span className="font-semibold text-slate-900">{t.team}</span> ({TEN_PHONG[t.dept] || t.dept}) đạt <span className="font-semibold tabular-nums">{fmtNum(t.avg)}</span> — {ratio >= 1 ? <span className="text-emerald-700 font-medium">cao hơn TB hệ thống {fmtPct((ratio - 1) * 100)}</span> : <span className="text-rose-700 font-medium">thấp hơn TB hệ thống {fmtPct((1 - ratio) * 100)}</span>}. {ratio >= 1 ? "Có thể nhân rộng phương pháp đào tạo của team này." : "Cần đào tạo lại hoặc 1-1 với trưởng nhóm."}
                    </span>
                  </li>
                );
              })}
            </ul>
          </InsightCard>
        </div>
      )}
    </div>
  );
}

function DepartmentInsight({ ins }) {
  const { top, bot } = splitTopBottom(ins.items, 3);
  const meaningful = ins.meaningful || [];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <InsightCard tone="good" icon={Award} title="Top Performing Teams">
        {top.length === 0 ? (
          <span className="text-slate-500">Không có dữ liệu</span>
        ) : top.map(t => (
          <div key={t._id} className="flex items-center justify-between py-1 first:pt-0 last:pb-0 border-t border-emerald-200/60 first:border-t-0">
            <span className="font-semibold text-slate-900">{t.team}</span>
            <span className="font-semibold tabular-nums text-emerald-700">{fmtNum(t.avg)}</span>
          </div>
        ))}
      </InsightCard>
      <InsightCard tone="warn" icon={AlertTriangle} title="Team cần cải thiện">
        {bot.length === 0 ? (
          <span className="text-slate-500">Phòng ban có ít team — không có team nào nổi bật ở nhóm cần cải thiện.</span>
        ) : bot.map(t => (
          <div key={t._id} className="flex items-center justify-between py-1 first:pt-0 last:pb-0 border-t border-amber-200/60 first:border-t-0">
            <span className="font-semibold text-slate-900">{t.team}</span>
            <span className="font-semibold tabular-nums text-amber-700">{fmtNum(t.avg)}</span>
          </div>
        ))}
      </InsightCard>
      {meaningful.length > 0 && (
        <div className="lg:col-span-2">
          <InsightCard tone="info" icon={Lightbulb} title="Khuyến nghị cho phòng ban">
            <ul className="space-y-1.5">
              {meaningful.slice(0, 4).map(t => {
                const ratio = ins.deptAvg > 0 ? t.avg / ins.deptAvg : 1;
                return (
                  <li key={t._id} className="flex items-start gap-2">
                    <ChevronRight size={13} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Team <span className="font-semibold text-slate-900">{t.team}</span> đạt <span className="font-semibold tabular-nums">{fmtNum(t.avg)}</span> — {ratio >= 1 ? <span className="text-emerald-700 font-medium">vượt TB phòng {fmtPct((ratio - 1) * 100)}</span> : <span className="text-rose-700 font-medium">dưới TB phòng {fmtPct((1 - ratio) * 100)}</span>}. {ratio >= 1 ? "Đề xuất chia sẻ kinh nghiệm với các team khác." : "Đề xuất tổ chức đào tạo bổ sung."}
                    </span>
                  </li>
                );
              })}
            </ul>
          </InsightCard>
        </div>
      )}
    </div>
  );
}

function TeamLeadersInsight({ ins }) {
  const { top, bot } = splitTopBottom(ins.items, 3);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <InsightCard tone="good" icon={Award} title="Trưởng nhóm xuất sắc">
        {top.length === 0 ? (
          <span className="text-slate-500">Không có dữ liệu</span>
        ) : top.map(l => (
          <div key={l.leader} className="flex items-center justify-between py-1 first:pt-0 last:pb-0 border-t border-emerald-200/60 first:border-t-0">
            <span><span className="font-semibold text-slate-900">{l.leader}</span> <span className="text-slate-500">· {l.count} NV</span></span>
            <span className="font-semibold tabular-nums text-emerald-700">{fmtNum(l.avg)}</span>
          </div>
        ))}
      </InsightCard>
      <InsightCard tone="warn" icon={AlertTriangle} title="Trưởng nhóm cần hỗ trợ">
        {bot.length === 0 ? (
          <span className="text-slate-500">Quá ít trưởng nhóm để xác định nhóm cần hỗ trợ.</span>
        ) : bot.map(l => (
          <div key={l.leader} className="flex items-center justify-between py-1 first:pt-0 last:pb-0 border-t border-amber-200/60 first:border-t-0">
            <span><span className="font-semibold text-slate-900">{l.leader}</span> <span className="text-slate-500">· {l.count} NV</span></span>
            <span className="font-semibold tabular-nums text-amber-700">{fmtNum(l.avg)}</span>
          </div>
        ))}
      </InsightCard>
      <div className="lg:col-span-2">
        <InsightCard tone="info" icon={Lightbulb} title="Khuyến nghị">
          <ul className="space-y-1.5">
            {top.slice(0, 1).map(l => (
              <li key={l.leader} className="flex items-start gap-2">
                <ChevronRight size={13} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Trưởng nhóm <span className="font-semibold text-slate-900">{l.leader}</span> dẫn đầu với điểm TB <span className="font-semibold tabular-nums">{fmtNum(l.avg)}</span> ({fmtPct(l.pctExcellent)} đạt mức Giỏi). Có thể chia sẻ phương pháp quản lý.</span>
              </li>
            ))}
            {bot.slice(0, 1).map(l => (
              <li key={l.leader} className="flex items-start gap-2">
                <ChevronRight size={13} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Nhóm của <span className="font-semibold text-slate-900">{l.leader}</span> có điểm TB thấp <span className="font-semibold tabular-nums">{fmtNum(l.avg)}</span> với {fmtPct(l.pctAverage)} ở mức Trung bình. Cần coaching 1-1 và xem lại quy trình team.</span>
              </li>
            ))}
            {top.length === 0 && bot.length === 0 && (
              <li className="text-slate-500">Không đủ dữ liệu để đưa ra khuyến nghị.</li>
            )}
          </ul>
        </InsightCard>
      </div>
    </div>
  );
}

function TeamSingleInsight({ ins }) {
  const t = ins.items[0];
  if (!t) return <NotEnoughData />;
  const delta = ins.benchmark ? t.avg - ins.benchmark : 0;
  return (
    <div className="grid grid-cols-1 gap-3">
      <InsightCard tone={delta >= 0 ? "good" : "warn"} icon={delta >= 0 ? Award : AlertTriangle} title={`Hiệu suất team ${t.team}`}>
        <p>
          Team <span className="font-semibold text-slate-900">{t.team}</span> ({TEN_PHONG[t.dept] || t.dept}) đạt điểm TB{" "}
          <span className="font-semibold tabular-nums">{fmtNum(t.avg)}</span> trên {t.count} bản ghi.
          {ins.benchmark > 0 && (
            <> So với TB toàn hệ thống ({fmtNum(ins.benchmark)}): {delta >= 0 ? <span className="text-emerald-700 font-medium">+{fmtNum(delta)}</span> : <span className="text-rose-700 font-medium">{fmtNum(delta)}</span>}.</>
          )}
        </p>
        <p className="mt-2 text-slate-600">
          Phân bố: <span className="font-semibold text-emerald-700 tabular-nums">{fmtPct(t.pctExcellent)} Giỏi</span> · <span className="font-semibold text-indigo-700 tabular-nums">{fmtPct(t.pctGood)} Khá</span> · <span className="font-semibold text-amber-700 tabular-nums">{fmtPct(t.pctAverage)} Trung bình</span>.
        </p>
      </InsightCard>
    </div>
  );
}

function LeaderInsight({ ins }) {
  if (ins.items.length === 0) return <NotEnoughData />;
  if (ins.items.length === 1) {
    const l = ins.items[0];
    return (
      <InsightCard tone={l.delta >= 0 ? "good" : "warn"} icon={l.delta >= 0 ? Award : AlertTriangle} title={`${l.leader}'s Team`}>
        <p>
          Trưởng nhóm <span className="font-semibold text-slate-900">{l.leader}</span> quản lý {l.count} nhân viên với điểm TB{" "}
          <span className="font-semibold tabular-nums">{fmtNum(l.avg)}</span>.
          {ins.benchmark > 0 && (
            <> So với TB hệ thống ({fmtNum(ins.benchmark)}): {l.delta >= 0 ? <span className="text-emerald-700 font-medium">+{fmtNum(l.delta)}</span> : <span className="text-rose-700 font-medium">{fmtNum(l.delta)}</span>}.</>
          )}
        </p>
        <p className="mt-2 text-slate-600">
          Phân bố trong nhóm: <span className="font-semibold text-emerald-700 tabular-nums">{fmtPct(l.pctExcellent)} Giỏi</span> · <span className="font-semibold text-amber-700 tabular-nums">{fmtPct(l.pctAverage)} Trung bình</span>.
        </p>
      </InsightCard>
    );
  }
  // multi-leader compare
  return <TeamLeadersInsight ins={ins} />;
}

function IndividualInsight({ ins }) {
  const peerDelta = ins.peerAvg != null ? ins.myAvg - ins.peerAvg : null;
  const tone = peerDelta == null ? "neutral" : peerDelta >= 0.5 ? "good" : peerDelta <= -0.5 ? "warn" : "info";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <InsightCard tone="info" icon={Target} title="Điểm cá nhân">
        <div className="text-[24px] font-semibold tabular-nums text-slate-900 leading-tight">{fmtNum(ins.myAvg)}</div>
        <div className="mt-1 flex items-center gap-2">
          <CategoryPill category={ins.myCat} />
          <span className="text-slate-500">{ins.records} bản ghi</span>
        </div>
      </InsightCard>
      <InsightCard tone={tone} icon={Users} title="So với đồng đội cùng team">
        {ins.peerAvg == null ? (
          <p className="text-slate-500">Không có dữ liệu so sánh trong cùng team.</p>
        ) : (
          <>
            <p className="mb-1">TB đồng đội: <span className="font-semibold tabular-nums text-slate-900">{fmtNum(ins.peerAvg)}</span></p>
            <p>Chênh lệch: {peerDelta >= 0 ? <span className="font-semibold text-emerald-700 tabular-nums">+{fmtNum(peerDelta)}</span> : <span className="font-semibold text-rose-700 tabular-nums">{fmtNum(peerDelta)}</span>}</p>
          </>
        )}
      </InsightCard>
      <InsightCard tone="neutral" icon={BarChart3} title="Xu hướng">
        {ins.trend == null ? (
          <p className="text-slate-500">Cần ít nhất 2 kỳ để xem xu hướng.</p>
        ) : (
          <>
            <Trend delta={ins.trend} />
            <p className="text-slate-600 mt-1.5 text-[12.5px]">{ins.trend > 0 ? "Đang tiến bộ qua các kỳ." : ins.trend < 0 ? "Đang đi xuống qua các kỳ — cần lưu ý." : "Ổn định qua các kỳ."}</p>
          </>
        )}
      </InsightCard>
    </div>
  );
}
// ========= CHARTS SECTION =========
function ChartsSection({ stats, teamAgg, leaderAgg, contextLevel, momRows, departments }) {
  const showMoM = contextLevel === 1 && momRows.length >= 2;
  return (
    <section className="mb-6">
      <SectionHeader
        icon={BarChart3}
        title="Biểu đồ"
        subtitle="So sánh điểm trung bình và phân bố phân loại"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Team comparison chart */}
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-[13px] font-semibold text-slate-900">So sánh giữa các team</h4>
              <p className="text-[11.5px] text-slate-500 mt-0.5">Điểm TB và số lượng nhân viên theo team</p>
            </div>
            <span className="text-[11px] text-slate-400 tabular-nums">{teamAgg.length} team</span>
          </div>
          {teamAgg.length === 0 ? (
            <NotEnoughData msg="Không có team nào trong phạm vi này" />
          ) : (
            <div className="space-y-3">
              {[...teamAgg].sort((a, b) => b.avg - a.avg).map((t, i) => {
                const max = Math.max(...teamAgg.map(x => x.avg), 10);
                const isVacc = t.dept === "Vaccine";
                return (
                  <LabeledBar
                    key={t._id}
                    rank={String(i + 1).padStart(2, "0")}
                    label={t.team}
                    sublabel={`· ${TEN_PHONG[t.dept] || t.dept}`}
                    value={t.avg}
                    max={max}
                    color={isVacc ? "indigo" : "emerald"}
                    count={t.count}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Category distribution */}
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-[13px] font-semibold text-slate-900">Phân bố phân loại</h4>
              <p className="text-[11.5px] text-slate-500 mt-0.5">Tỷ lệ Giỏi / Khá / Trung bình</p>
            </div>
            <span className="text-[11px] text-slate-400 tabular-nums">{stats.n} bản ghi</span>
          </div>
          {stats.n === 0 ? (
            <NotEnoughData />
          ) : (
            <>
              <div className="mb-4">
                <div className="text-[11.5px] font-medium text-slate-500 mb-2">Tổng thể</div>
                <StackedBar
                  total={stats.n}
                  segments={[
                    { label: "Giỏi", value: stats.cats["Giỏi"], color: "bg-emerald-500" },
                    { label: "Khá", value: stats.cats["Khá"], color: "bg-indigo-500" },
                    { label: "Trung bình", value: stats.cats["Trung bình"], color: "bg-amber-500" },
                  ]}
                />
              </div>
              {/* Per-team breakdown */}
              {teamAgg.length > 0 && teamAgg.length <= 8 && (
                <div className="border-t border-slate-100 pt-4">
                  <div className="text-[11.5px] font-medium text-slate-500 mb-2.5">Theo từng team</div>
                  <div className="space-y-3">
                    {[...teamAgg].sort((a, b) => b.pctExcellent - a.pctExcellent).map(t => (
                      <div key={t._id}>
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-[12.5px] font-medium text-slate-800 truncate">{t.team}</span>
                          <span className="text-[11px] text-slate-500 tabular-nums">{t.count} NV</span>
                        </div>
                        <StackedBar
                          total={t.count}
                          segments={[
                            { label: "Giỏi", value: t.cats["Giỏi"], color: "bg-emerald-500" },
                            { label: "Khá", value: t.cats["Khá"], color: "bg-indigo-500" },
                            { label: "Trung bình", value: t.cats["Trung bình"], color: "bg-amber-500" },
                          ]}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Leader comparison (only at L2+ context) */}
        {(contextLevel === 2 || contextLevel === 3) && leaderAgg.length >= 2 && (
          <div className="bg-white border border-slate-200 rounded-lg p-5 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-[13px] font-semibold text-slate-900">So sánh giữa các trưởng nhóm</h4>
                <p className="text-[11.5px] text-slate-500 mt-0.5">Điểm TB và số nhân viên quản lý</p>
              </div>
              <span className="text-[11px] text-slate-400 tabular-nums">{leaderAgg.length} trưởng nhóm</span>
            </div>
            <div className="space-y-3">
              {[...leaderAgg].sort((a, b) => b.avg - a.avg).map((l, i) => {
                const max = Math.max(...leaderAgg.map(x => x.avg), 10);
                return (
                  <LabeledBar
                    key={l._id}
                    rank={String(i + 1).padStart(2, "0")}
                    label={l.leader}
                    sublabel={`· ${l.team}`}
                    value={l.avg}
                    max={max}
                    color="purple"
                    count={l.count}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Month-over-Month — ONLY at L1 Department */}
        {showMoM && (
          <div className="bg-white border border-slate-200 rounded-lg p-5 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-[13px] font-semibold text-slate-900">So sánh tháng — phòng {TEN_PHONG[departments[0]] || departments[0]}</h4>
                <p className="text-[11.5px] text-slate-500 mt-0.5">Điểm TB và phân bố qua từng tháng</p>
              </div>
              <span className="text-[11px] text-slate-400 tabular-nums">{momRows.length} kỳ</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {momRows.map((m, i) => {
                const prev = momRows[i - 1];
                const delta = prev ? m.avg - prev.avg : null;
                return (
                  <div key={m.key} className="border border-slate-200 rounded-md p-4 bg-slate-50/40">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-[14px] font-semibold text-slate-900">{TEN_THANG_DAY[m.month]} {m.year}</div>
                        <div className="text-[11.5px] text-slate-500 mt-0.5 tabular-nums">{m.n} bản ghi</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[20px] font-semibold tabular-nums text-slate-900 leading-none">{fmtNum(m.avg)}</div>
                        {delta !== null && <div className="mt-1.5"><Trend delta={delta} /></div>}
                      </div>
                    </div>
                    <StackedBar
                      total={m.n}
                      segments={[
                        { label: "Giỏi", value: m.cats["Giỏi"], color: "bg-emerald-500" },
                        { label: "Khá", value: m.cats["Khá"], color: "bg-indigo-500" },
                        { label: "Trung bình", value: m.cats["Trung bình"], color: "bg-amber-500" },
                      ]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ========= RANKING SECTION =========
function RankingSection({ top5, bot5, mode, contextLevel }) {
  const labels = {
    team: { entity: "team", title: "Top 5 Team", subtitle: "Xếp hạng theo điểm trung bình" },
    leader: { entity: "trưởng nhóm", title: "Top 5 Trưởng nhóm", subtitle: "Xếp hạng theo điểm trung bình của nhóm" },
    person: { entity: "nhân viên", title: "Top 5 Nhân viên", subtitle: "Xếp hạng theo điểm cá nhân" },
  }[mode];

  const renderEntity = (e, i, type) => {
    let primary, secondary;
    if (mode === "team") { primary = e.team; secondary = TEN_PHONG[e.dept] || e.dept; }
    else if (mode === "leader") { primary = e.leader; secondary = e.team; }
    else { primary = e.name; secondary = e.team; }
    return (
      <div className="px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors">
        <span className={`font-mono text-[11.5px] font-semibold tabular-nums w-5 ${type === "top" ? "text-emerald-600" : "text-rose-600"}`}>
          {String(i + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[13.5px] text-slate-900 font-semibold truncate">{primary}</div>
          <div className="text-[11.5px] text-slate-500 truncate">{secondary} · {e.count} người</div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[11px] text-slate-500 tabular-nums hidden sm:inline">{fmtPct(e.pctExcellent)} Giỏi</span>
          <span className={`font-mono text-[15px] font-semibold tabular-nums w-10 text-right ${type === "top" ? "text-emerald-700" : "text-rose-700"}`}>
            {fmtNum(e.avg)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="mb-6">
      <SectionHeader
        icon={Trophy}
        title={labels.title}
        subtitle={labels.subtitle}
        accent="amber"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 bg-emerald-50/40 flex items-center gap-2">
            <Award size={14} className="text-emerald-600" />
            <h4 className="text-[13px] font-semibold text-slate-900">Tốt nhất — Tuyên dương</h4>
          </div>
          <div className="divide-y divide-slate-100">
            {top5.length === 0 ? (
              <div className="p-6 text-center text-[12.5px] text-slate-400">Không có dữ liệu</div>
            ) : top5.map((e, i) => <div key={e._id || i}>{renderEntity(e, i, "top")}</div>)}
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 bg-rose-50/30 flex items-center gap-2">
            <AlertTriangle size={14} className="text-rose-600" />
            <h4 className="text-[13px] font-semibold text-slate-900">Cần cải thiện — Cảnh báo</h4>
          </div>
          <div className="divide-y divide-slate-100">
            {bot5.length === 0 ? (
              <div className="p-6 text-center text-[12.5px] text-slate-400">Không có dữ liệu</div>
            ) : bot5.map((e, i) => <div key={e._id || i}>{renderEntity(e, i, "bot")}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ========= INDIVIDUAL VIEW =========
function IndividualSection({ filtered, contextEntity }) {
  const valid = filtered.filter(r => typeof r.score === "number");
  if (valid.length === 0) {
    return (
      <section className="mb-6">
        <SectionHeader icon={Users} title="Lịch sử cá nhân" subtitle={`Chi tiết các kỳ đánh giá của ${contextEntity}`} />
        <NotEnoughData />
      </section>
    );
  }
  // Show monthly history
  const sorted = [...valid].sort((a, b) => (a.year - b.year) || (a.month - b.month));
  const max = 10;
  return (
    <section className="mb-6">
      <SectionHeader icon={Users} title="Lịch sử các kỳ đánh giá" subtitle={`${contextEntity} · ${valid.length} kỳ`} />
      <div className="bg-white border border-slate-200 rounded-lg p-5">
        <div className="space-y-3">
          {sorted.map((r, i) => {
            const prev = sorted[i - 1];
            const delta = prev ? r.score - prev.score : null;
            return (
              <div key={r._id} className="flex items-center gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="text-[12.5px] font-medium text-slate-700">{TEN_THANG_DAY[r.month]}</div>
                  <div className="text-[11px] text-slate-500 tabular-nums">{r.year}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <CategoryPill category={r.category} />
                    <div className="flex items-center gap-2">
                      {delta !== null && <Trend delta={delta} />}
                      <span className="text-[15px] font-semibold tabular-nums text-slate-900">{r.score}</span>
                      <span className="text-[11px] text-slate-400">/ 10</span>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${(r.score / max) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
