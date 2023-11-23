const dataJSON = [
  {
    "id": 1,
    "name": "Thi thử trực tuyến toán học lớp 7",
    "detail": "Bài tập Toán lớp 7: Cộng, trừ, nhân, chia số thập phân",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "./image/test/test_1.png"
  },
  {
    "id": 2,
    "name": "Thi thử trực tuyến tiếng anh lớp 7",
    "detail": "Đề kiểm tra trắc nghiệm môn Tiếng Anh lớp 7 học kỳ II",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "./image/test/test_2.png"
  },
  {
    "id": 3,
    "name": "Thi thử trực tuyến tiếng anh lớp 8",
    "detail": "Đề kiểm tra trắc nghiệm môn Tiếng Anh lớp 8 học kỳ II",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "./image/test/test_3.png"
  },
  {
    "id": 4,
    "name": "Thi thử trực tuyến hóa học lớp 8",
    "detail": "Đề thi trắc nghiệm 15 phút chương HIDRO - NƯỚC",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "./image/test/test_4.png"
  },
  {
    "id": 5,
    "name": "Thi thử trực tuyến vật lý lớp 8",
    "detail": "Đề kiểm tra 15 phút sự chuyển hóa và bảo toàn cơ năng môn Lý lớp 8",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "./image/test/test_5.png"
  },
  {
    "id": 6,
    "name": "Thi thử trực tuyến sinh học lớp 7",
    "detail": "Tổng hợp các đề thi trắc nghiệm thi giữa kỳ, thi HK1, HK2 và các đề kiểm tra 15 phút, kiểm tra 1 tiết Sinh Học Lớp 7.",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "./image/test/test_6.png"
  }
]

const elementTest = ({
  linkImg,
  name,
  detail,
  turns,
  date,
}) => {
  const content = 
  `
  <img src="${linkImg}" alt="">
  <div class="test-detail full-width">
    <p class="name">${name}</p>
    <p class="detail">${detail}</p>
  </div>
  <div class="test-info full-width">
    <img src="./icon/edit.png" alt="">
    <p>${turns} lượt làm&nbsp;|</p>
    <img src="./icon/clock.png" alt="">
    <p>${date}</p>
  </div>
  `
  const element = document.createElement("div");
  element.className = "test";
  element.innerHTML = content;
  return element;
}

const renderListTest = () => {
  const elementListTest = document.querySelector(".list-test");
  dataJSON.forEach((d) => {
    const child = elementTest(d);
    elementListTest.appendChild(child);
  })
}

const init = () => {
  renderListTest();
}

init();