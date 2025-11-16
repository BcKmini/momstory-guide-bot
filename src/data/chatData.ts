// 이미지를 추가하려면:
// 1. src/assets/images/ 폴더를 만들고
// 2. 아래 파일명과 동일하게 이미지를 넣으세요:
//    - event-date.jpg, event-time.jpg, supplies.jpg, 
//    - dress-code.jpg, parking.jpg, timetable.jpg, inquiry.jpg
// 3. 아래 주석을 해제하세요:
// import eventDateImg from "@/assets/images/event-date.jpg";
// import eventTimeImg from "@/assets/images/event-time.jpg";
// import suppliesImg from "@/assets/images/supplies.jpg";
// import dressCodeImg from "@/assets/images/dress-code.jpg";
// import parkingImg from "@/assets/images/parking.jpg";
// import timetableImg from "@/assets/images/timetable.jpg";
// import inquiryImg from "@/assets/images/inquiry.jpg";

export interface ChatAnswer {
  title: string;
  imageUrl?: string;
  content: string[];
  mapLocation?: string;
  isTable?: boolean;
  isLink?: boolean;
}

export interface ChatQuestion {
  id: string;
  icon: string;
  label: string;
  question: string;
  answer: ChatAnswer;
}

export const chatQuestions: ChatQuestion[] = [
  {
    id: "date",
    icon: "🗓",
    label: "행사일정",
    question: "행사 날짜가 언제인가요?",
    answer: {
      title: "🗓 행사 날짜",
      imageUrl: undefined, // 이미지 추가 후: eventDateImg
      content: ["2025년 10월 18일(토)"]
    }
  },
  {
    id: "time",
    icon: "⏰",
    label: "행사시간",
    question: "행사 시간이 어떻게 되나요?",
    answer: {
      title: "⏰ 행사 시간",
      imageUrl: undefined, // 이미지 추가 후: eventTimeImg
      content: [
        "10:00 ~ 13:00",
        "원활한 진행을 위해 9:30까지 입장 부탁드려요!"
      ]
    }
  },
  {
    id: "location",
    icon: "⛳",
    label: "행사장소",
    question: "행사 장소가 어디인가요?",
    answer: {
      title: "⛳ 행사 장소",
      mapLocation: "호암체육관",
      content: ["충주시 중원대로 3306 (호암동), 호암 체육관"]
    }
  },
  {
    id: "items",
    icon: "🎒",
    label: "준비물",
    question: "준비물이 무엇인가요?",
    answer: {
      title: "🎒 준비물",
      imageUrl: undefined, // 이미지 추가 후: suppliesImg
      content: [
        "• 돗자리",
        "• 쓰레기 비닐",
        "• 간단한 간식",
        "• 물",
        "• 물티슈",
        "• 휴지"
      ]
    }
  },
  {
    id: "dresscode",
    icon: "👕",
    label: "드레스코드",
    question: "드레스코드가 어떻게 되나요?",
    answer: {
      title: "👕 드레스코드",
      imageUrl: undefined, // 이미지 추가 후: dressCodeImg
      content: [
        "👶 자녀: 유치원 체육복, 양말, 운동화",
        "",
        "👨‍👩‍👧 부모님: 흰색 상의, 편안한 바지, 운동화",
        "",
        "⚠️ 치마, 크록스, 샌들 등 절대 금지"
      ]
    }
  },
  {
    id: "parking",
    icon: "🚗",
    label: "주차",
    question: "주차 공간이 있나요?",
    answer: {
      title: "🚗 주차 공간",
      imageUrl: undefined, // 이미지 추가 후: parkingImg
      content: [
        "아이들과 가을 하늘도 보고, 즐거운 대화도 나누며 도보 이동 부탁드립니다!",
        "",
        "체육관 자체 50대 주차 공간 확보"
      ]
    }
  },
  {
    id: "schedule",
    icon: "📋",
    label: "타임테이블",
    question: "행사 타임테이블이 어떻게 되나요?",
    answer: {
      title: "📋 행사 타임테이블",
      imageUrl: undefined, // 이미지 추가 후: timetableImg
      isTable: true,
      content: [
        "10:00~10:30|등원 및 자리 정돈, 명찰 부착",
        "10:30~10:50|개회식 및 준비운동",
        "10:50~11:20|1부. 몸풀기 및 협동\n• 만 3세: 공 운반\n• 만 4세: 친구야, 같이 가자\n• 만 5세: O, X 퀴즈",
        "11:20~11:50|2부. 유아 개인 및 단체\n• 계주(4인 1조)",
        "11:50~12:30|3부. 가족참여 활동\n• 줄다리기, 신발 던지기, 가족 응원",
        "12:30~12:50|4부. 마무리 및 시상",
        "12:50~13:00|폐회식 및 귀가 지도"
      ]
    }
  },
  {
    id: "inquiry",
    icon: "⚠",
    label: "추가 문의",
    question: "추가로 궁금한 사항이 있어요.",
    answer: {
      title: "⚠ 추가 문의",
      imageUrl: undefined, // 이미지 추가 후: inquiryImg
      isLink: true,
      content: [
        "추가로 궁금한 사항은 다른 가족들도 궁금할 수 있으니 함께 공유해주세요!",
        "",
        "https://docs.google.com/forms/d/e/1FAIpQLSe2aQaef6s_yYCTNngh8FFxn8a7LtH7Vzw54FlRjUAkz7IJag/viewform"
      ]
    }
  }
];
