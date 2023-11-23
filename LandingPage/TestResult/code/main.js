const localStorageItem = {
  quizzResult: "quizzResult",
}

const buttonBackToQuizz = document.querySelector("#back-to-quizz");

// Template
const templateResult = (
  {
    point, //number
    maxPoint, // number
    vieNameOtp, // string
    engNameOtp, // string
    characteristic, // string
    keywords, // string
    major, // string
  }
) => {
  return (
    `
    <div class="box-point">
      <div class="point">
        <p class="count">${point} / ${maxPoint}</p>
        <p class="unit">điểm</p>
      </div>
    </div>
    <div class="detail">
      <p class="title">${vieNameOtp} (${engNameOtp})</p>
      <div class="option">
        <p>
          <span class="label">Đặc điểm:</span>
          <span class="value">${characteristic}</span>
        </p>
        <p>
          <span class="label">Từ khóa nổi bật để gợi nhắc:</span>
          <span class="value">${keywords}</span>
        </p>
        <p>
          <span class="label">Ngành phù hợp:</span>
          <span class="value">${major}</span>
        </p>
      </div>
    </div>
    `
  )
}



// Func
const renderListResult = async () => {
  let listResult = [];
  const boxResult = document.querySelector(".list-result");
  const quizzResult = JSON.parse(localStorage.getItem(localStorageItem.quizzResult));

  listResult = [
    {
      point: 0, 
      maxPoint: 18, 
      vieNameOtp: "Kỹ thuật", 
      engNameOtp: "Realistic", 
      code: "realistic",
      characteristic: "Realistic được mệnh danh là nhóm “Do-er”. Họ thường thích làm việc trong môi trường vật chất bên ngoài như làm việc với máy móc, công cụ, động thực vật. Họ thích được hoạt động tay chân hơn là ngồi một chỗ và suy nghĩ. Họ không phù hợp với công việc bàn giấy hay phải làm việc thân thiết, chặt chẽ với quá nhiều người.", 
      keywords: "Thực tế - Chân thật - Khỏe mạnh - Hành động - Tỉ mỉ", 
      major: "Những ngành nghề của Nhóm người Kỹ thuật thường bao gồm những vấn đề thực hành, ứng dụng thực tế và đưa ra giải pháp như: ngành Kiến trúc - Xây Dựng, ngành Ô tô - Cơ khí, ngành Điện - Điện tử, Địa chất, Tự động hóa, Công nghệ thông tin, Nông - lâm - ngư nghiệp, Quản lý công nghiệp, Hải dương học…", 
    },
    {
      point: 10, 
      maxPoint: 18, 
      vieNameOtp: "Xã hội", 
      engNameOtp: "Social", 
      code: "social",
      characteristic: "Nhóm này được mệnh danh là những “Helper”. Người thuộc nhóm này thích giúp đỡ, huấn luyện hoặc chăm sóc sức khỏe cho người khác. Họ có khả năng về diễn đạt, giảng giải và thuyết phục. Họ là người hướng ngoại, thích hoạt động xã hội, từ thiện, cộng đồng.", 
      keywords: "Quảng giao - Lắng nghe - Linh hoạt - Nhạy cảm - Kiên nhẫn", 
      major: "Những công việc phù hợp với nhóm này đòi hỏi giao tiếp, kết nối và truyền đạt thông tin đến người khác như: Giáo viên, giảng viên; Hướng dẫn viên du lịch; Tư vấn viên lĩnh vực tâm lý; Chăm sóc sức khỏe cộng đồng; Công tác nhân sự; Cảnh sát; Nhân viên xã hội học.", 
    },
    {
      point: 0, 
      maxPoint: 18, 
      vieNameOtp: "Nghiên cứu", 
      engNameOtp: "Investigative", 
      code: "investigative",
      characteristic: " Investigative được biết đến là nhóm “Thinker”. Nhóm người này thường thích học và giải toán hoặc các môn khoa học. Họ thường là nhóm hướng nội, và nhìn chung sẽ tránh việc phải làm leader, giao tiếp nhiều hay thuyết phục người khác. Họ có óc phân tích tốt, cẩn thận, tỉ mỉ và chính xác.", 
      keywords: "Phân tích - Tò mò - Logic - Điềm tĩnh - Độc lập", 
      major: "Nghề nghiệp phù hợp với nhóm Investigative thường liên quan đến ý tưởng và yêu cầu phải suy nghĩ nhiều hay tìm kiếm sự thật và suy nghĩ để xác định vấn đề như Khoa học công nghệ (trí tuệ nhân tạo, công nghệ thông tin, y sinh môi trường, kỹ thuật….), Khoa học tự nhiên (toán, lý, hóa, sinh, địa lý, thống kê…), Khoa học xã hội (nhân học, tâm lý học, pháp luật, sử học, địa lý…), Y _ Dược…", 
    },
    {
      point: 0, 
      maxPoint: 18, 
      vieNameOtp: "Quản lý ", 
      engNameOtp: "Enterprising", 
      code: "enterprising",
      characteristic: "Những “Enterprising” là những “Persuader” Người thuộc nhóm này là những người có sở thích lãnh đạo, thuyết phục người khác. Họ rất quyết đoán, mạnh bạo và có tầm nhìn xa. Họ rất phù hợp cho các vị trí quản lý trong doanh nghiệp và định hướng trong xã hội. Họ lãnh đạo tốt và là người ra quyết định, dám chấp nhận rủi ro. Là những người “dám nghĩ dám làm”, ưa thích hùng biện, đặt lợi ích kinh tế lên hàng đầu.", 
      keywords: "Điều hành - Phân công - Kiểm soát - Chiến lược - Bản lĩnh", 
      major: "Những người thuộc nhóm này rất giỏi trong việc bắt đầu hay thực hiện các dự án. Quản trị kinh doanh; Thương mại; Marketing; Kế toán – tài chính; Tài chính – ngân hàng; Luật sư; Kinh tế đối ngoại/quốc tế; Dịch vụ khách hàng; Tiếp viên hàng không; Nhân viên sales; Quy hoạch đô thị; Sĩ quan công an; Sĩ quan quân đội; Chánh án; Viện kiểm sát nhân dân; Quản lý giáo dục các cấp", 
    },
    {
      point: 0, 
      maxPoint: 18, 
      vieNameOtp: "Nghệ thuật", 
      engNameOtp: "Artistic", 
      code: "artistic",
      characteristic: " Nhóm này được biết đến là những “Creator”. Người thuộc nhóm này có năng khiếu nghệ thuật và sáng tạo, có gu thẩm mỹ và trí tưởng tượng phong phú, ngẫu hứng nên không thích làm việc theo quy luật gò bó. Họ thường có một năng khiếu hoặc “tài lẻ” nào đó liên quan đến vẽ vời, âm nhạc, viết lách, thủ công và thích thể hiện cá tính, cái tôi của bản thân.", 
      keywords: "Sáng tạo - Cảm xúc - Linh hoạt - Trực giác - Ý tưởng", 
      major: "Ngành nghề phù hợp với họ thường liên quan đến kiểu cách, thiết kế và họa tiết hay ngôn ngữ như Báo chí (nhà báo, bình luận viên, dẫn chương trình, biên tập viên,…), Truyền thông (tổ chức sự kiện, quan hệ công chúng, quảng cáo, …), Sân khấu điện ảnh, Mỹ thuật, Kiến trúc, Thiết kế, Thời trang, Hội họa, Giáo viên dạy văn/sử/Anh văn,…", 
    },
    {
      point: 0,  
      maxPoint: 18, 
      vieNameOtp: "Nghiệp vụ", 
      engNameOtp: "Conventional", 
      code: "conventional",
      characteristic: "Conventional là những “Organizer” chính hiệu. Là những người thích nguyên tắc, làm việc tuân theo quy trình, thủ tục. Họ làm việc với con số, dữ liệu, báo cáo hoặc máy móc được sắp đặt trật tự hơn là những ý tưởng. Họ có khả năng làm việc văn phòng, thống kê; thực hiện các công việc đòi hỏi chi tiết, tỉ mỉ, cẩn thận hoặc làm theo hướng dẫn của người khác.", 
      keywords: "Tỉ mỉ - Nguyên tắc - Rõ ràng - Chuyên cần - Kỷ luật", 
      major: "Công việc hành chính, nghiên cứu viên, luật sư, thanh tra, kế toán, công an hình sự …", 
    }
  ]

  listResult.forEach((result) => {
    result = {
      ...result,
      point: quizzResult[result.code].point,
      maxPoint: quizzResult[result.code].maxPoint,
    }

    const divResult = document.createElement("div");
    divResult.className = "result";
    divResult.innerHTML = templateResult(result);
    boxResult.appendChild(divResult);
  })
}


const backToQuizz = () => {
  localStorage.removeItem(localStorageItem.quizzResult);
  const cutPath = window.location.pathname.split("/TestResult/");
  window.location.href = `${cutPath[0]}/Quizz/${cutPath[1]}`;
}


// Init
const init = () => {
  const quizzResult = JSON.parse(localStorage.getItem(localStorageItem.quizzResult));
  
  if(quizzResult === null) {
    const cutPath = window.location.pathname.split("/TestResult/");
    window.location.href = `${cutPath[0]}/Quizz/${cutPath[1]}`;
    return;
  }

  renderListResult();
}


// Run
init();
buttonBackToQuizz.addEventListener("click", backToQuizz);