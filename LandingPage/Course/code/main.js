const dataJSON = [
  {
    "id": 1,
    "title": "Khóa học VFX Compositing nâng cao",
    "detail": "Khóa học giúp bạn nâng cao những kỹ năng thực hiện những hiệu ứng và kỹ xảo phức tạp",
    "linkImg": "./image/course/course_1.png",
    "type": "master"
  },
  {
    "id": 2,
    "title": "Thiết kế đồ họa",
    "detail": "Khoá học thiết kế đồ hoạ từ cơ bản đến nâng cao đem lại cho bạn những kĩ năng và kiến thức....",
    "linkImg": "./image/course/course_2.png",
    "type": "basic"
  },
  {
    "id": 3,
    "title": "Khóa học UIUX Design",
    "detail": "Bắt đầu hành trình học UIUX design từ những kiến thức cơ bản...",
    "linkImg": "./image/course/course_3.png",
    "type": "master"
  },
  {
    "id": 4,
    "title": "Khóa học Illustrator Basic",
    "detail": "Thành thạo illustrator để thiết kế Banner Ecommerce, Social, Poster sản phẩm,...",
    "linkImg": "./image/course/course_4.png",
    "type": "master"
  },
  {
    "id": 5,
    "title": "Ngôn ngữ lập trình C",
    "detail": "Học C cũng là một hướng đi đúng đắn để có 1 nền tảng lập trình vững chắc cho các ngôn ngữ phức tạp hơn.",
    "linkImg": "./image/course/course_5.png",
    "type": "basic"
  },
  {
    "id": 6,
    "title": "Khóa học Figma UI Design",
    "detail": "Bắt đầu hành trình học Figma UI Design từ cơ bản đến trung cấp...",
    "linkImg": "./image/course/course_6.png",
    "type": "basic"
  }
]

const elementCourse = ({
  title,
  detail,
  linkImg,
}) => {
  const content = 
  `
  <img src="${linkImg}" alt="">
  <div class="col-left">
    <p class="course-title">${title}</p>
    <p class="course-detail">${detail}</p>
  </div>
  <button class="button button-light">Chi tiết khóa học</button>
  `
  const element = document.createElement("div");
  element.className = "course";
  element.innerHTML = content;
  return element;
}

const renderListCourse = () => {
  const elementListCourse = document.querySelector(".list");
  dataJSON.forEach((d) => {
    elementListCourse.appendChild(elementCourse(d));
  });
}

const init = () => {
  renderListCourse();
}

init();