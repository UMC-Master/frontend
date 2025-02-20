/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from '@assets/dummyImage/clean.png';

// 더미 댓글 생성 함수
export const generateComments = (numberOfComments: number) => {
  const authors = [
    "홍길동", "김철수", "박지은", "이수정", "최민우", "윤소라", "정하늘", "김지민", "송우빈", "장윤호"
  ];

  const comments = [
    "이 꿀팁 너무 유용해요! 감사합니다.",
    "와, 이런 정보 처음 알았네요.",
    "정말 도움이 되는 내용이에요!",
    "저도 해봤는데 정말 효과가 있더라구요!",
    "다음에도 이런 팁 부탁드려요!",
    "이 방법 덕분에 많은 시간을 절약했어요.",
    "친구에게 공유해야겠어요.",
    "이 꿀팁 덕분에 생활이 편해졌어요.",
    "정말 고마워요. 자주 확인할게요.",
    "이런 팁을 주셔서 감사합니다.",
    "해본 결과 정말 유용했어요.",
    "이 팁 덕분에 일이 더 쉬워졌어요.",
    "저도 이 방법을 사용해봤어요!",
    "좋은 팁이에요. 너무 유용했어요.",
    "정말 감사합니다! 덕분에 시간 절약했어요.",
    "이 팁 덕분에 좀 더 효율적으로 살고 있어요.",
    "이건 정말 누구에게나 필요한 꿀팁 같아요.",
    "너무 좋은 정보에요. 항상 기대됩니다.",
    "이거 진짜 꿀팁! 꼭 따라해보세요.",
    "이 팁을 참고해서 생활이 훨씬 좋아졌어요.",
    "이 방법 정말 추천합니다. 편리해요.",
    "이건 좀 더 많이 알려져야 할 팁인 것 같아요.",
    "여러 번 시도해봤는데 계속 효과적이에요.",
    "정말 도움이 많이 됐어요. 감사합니다.",
    "이 방법을 모르고 있었네요. 정말 좋네요!",
    "이 팁 덕분에 일상 생활이 편리해졌어요.",
    "오늘부터 이 팁을 활용해봐야겠어요.",
    "이 팁 너무 좋아요. 완전 추천합니다.",
    "정말 많은 도움이 되었어요. 감사합니다.",
    "이 팁 정말 유용하네요. 친구에게도 알려줄게요."
  ];

  return Array.from({ length: numberOfComments }, (_, _index) => {
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const randomComment = comments[Math.floor(Math.random() * comments.length)];
    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}.0${currentDate.getMonth() + 1}.${String(currentDate.getDate()).padStart(2, '0')}`;
    const time = `${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}`;

    return {
      author: randomAuthor,
      date: date,
      time: time,
      comment: randomComment,
    };
  });
};

export const dummyData = Array.from({ length: 1000 }, (_, index) => ({
  id: (index + 1).toString(),
  image: Image,
  text: [
    "플라스틱 제대로 분리배출하는 방법",
    "음식물 쓰레기 제대로 처리하는 법",
    "종이 분리배출 제대로 하기",
    "매일 10분! 효율적인 집 청소법",
    "유리병 분리배출, 어떻게 할까요?",
    "옷 정리와 기부, 환경을 위한 작은 실천",
    "전자제품 폐기물, 올바르게 처리하는 방법",
  ][index % 5],
  likes: Math.floor(Math.random() * 5000) + 1000, // 1000~6000 사이 랜덤 값
  bookmarks: Math.floor(Math.random() * 5000) + 1000, // 1000~6000 사이 랜덤 값
  date: `2025.01.${String((index % 30) + 1).padStart(2, '0')}`,
}));

interface Hashtag {
  hashtag_id: number;
  name: string;
}

interface Media {
  media_url: string;
  media_type: string;
}
interface User {
  user_id: number;
  nickname: string;
  profile_image_url: string | null;
}

export interface TipItem {
  id: string;
  title: string;
  content: string;
  created_at: string;
  media: Media[];
  hashtags: { hashtag: Hashtag }[];
  user: User;
  _count: {
    likes: number;
    saves: number;
  };
  comments: { author: string; date: string; time: string; comment: string }[]; // 댓글 데이터 추가
}

export const ChallengeDetailPageDataList: TipItem[] = [
  {
    id: '1',
    media: [{ media_url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMjBfMzkg%2FMDAxNzM3MzM0NzAwMzky.lhLzVUx9LD4TXcSWtJr-7kFaGdM25zxUioUvsgUH0qcg.YgdfJ9jO-6JnJ-d-ILSbyyfVbYwL_fql_NLKDOkUHBAg.JPEG%2F20250120_095507.jpg&type=sc960_832", media_type: "image" }],
    title: "플라스틱 제대로 분리배출하는 방법",
    content: "플라스틱을 분리배출할 때는 라벨을 제거하고 깨끗이 씻어야 합니다. 또한 색깔별로 나누어 배출하면 더욱 효율적인 재활용이 가능합니다.",
    created_at: "2025-02-01T10:30:00Z",
    hashtags: [
      { hashtag: { hashtag_id: 1, name: "재활용/분리수거" } },
      { hashtag: { hashtag_id: 2, name: "성공시 1,000pt" } },
    ],
    user: { user_id: 101, nickname: "EcoWarrior", profile_image_url: null },
    _count: { likes: 12, saves: 5 },
    comments: generateComments(50),
  },
  {
    id: '2',
    media: [{ media_url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMjBfMzkg%2FMDAxNzM3MzM0NzAwMzky.lhLzVUx9LD4TXcSWtJr-7kFaGdM25zxUioUvsgUH0qcg.YgdfJ9jO-6JnJ-d-ILSbyyfVbYwL_fql_NLKDOkUHBAg.JPEG%2F20250120_095507.jpg&type=sc960_832", media_type: "image" }],
    title: "음식물 쓰레기 제대로 처리하는 법",
    content: "음식물 쓰레기를 줄이려면 잔반을 최소화하고, 껍질이나 뼈는 따로 분리해 처리해야 합니다. 음식물 건조기도 활용해보세요!",
    created_at: "2025-02-02T08:45:00Z",
    hashtags: [
      { hashtag: { hashtag_id: 4, name: "음식물쓰레기" } },
      { hashtag: { hashtag_id: 5, name: "성공시 1,500pt" } },
    ],
    user: { user_id: 102, nickname: "GreenChef", profile_image_url: null },
    _count: { likes: 8, saves: 3 },
    comments: generateComments(30),
  },
  {
    id: '3',
    media: [{ media_url: "https://via.placeholder.com/150", media_type: "image" }],
    title: "종이 분리배출 제대로 하기",
    content: "종이류를 분리배출할 때는 코팅된 종이와 일반 종이를 구분해야 합니다. 깨끗한 종이는 재활용이 가능하지만, 오염된 종이는 일반 쓰레기로 버려야 합니다.",
    created_at: "2025-02-03T12:20:00Z",
    hashtags: [
      { hashtag: { hashtag_id: 7, name: "재활용/분리수거" } },
      { hashtag: { hashtag_id: 8, name: "성공시 1,000pt" } },
    ],
    user: { user_id: 103, nickname: "PaperSaver", profile_image_url: null },
    _count: { likes: 15, saves: 7 },
    comments: generateComments(40),
  },
  {
    id: '4',
    media: [{ media_url: "https://via.placeholder.com/150", media_type: "image" }],
    title: "매일 10분! 효율적인 집 청소법",
    content: "하루 10분씩 청소 시간을 정해두면, 집이 항상 깔끔하게 유지됩니다. 각 방을 요일별로 나누어 청소하는 것도 좋은 방법입니다.",
    created_at: "2025-02-04T09:10:00Z",
    hashtags: [
      { hashtag: { hashtag_id: 10, name: "청소" } },
      { hashtag: { hashtag_id: 11, name: "성공시 1,000pt" } },
    ],
    user: { user_id: 104, nickname: "CleanFreak", profile_image_url: null },
    _count: { likes: 18, saves: 9 },
    comments: generateComments(60),
  },
  {
    id: '5',
    media: [{ media_url: "https://via.placeholder.com/150", media_type: "image" }],
    title: "유리병 분리배출, 어떻게 할까요?",
    content: "유리병을 분리할 때는 내용물을 완전히 비우고 헹궈야 합니다. 또한 깨진 유리는 일반 쓰레기로 배출해야 합니다.",
    created_at: "2025-02-05T14:50:00Z",
    hashtags: [
      { hashtag: { hashtag_id: 13, name: "재활용/분리수거" } },
      { hashtag: { hashtag_id: 14, name: "성공시 1,000pt" } },
    ],
    user: { user_id: 105, nickname: "RecycleKing", profile_image_url: null },
    _count: { likes: 10, saves: 4 },
    comments: generateComments(20),
  },
  {
    id: '6',
    media: [{ media_url: "https://via.placeholder.com/150", media_type: "image" }],
    title: "옷 정리와 기부, 환경을 위한 작은 실천",
    content: "입지 않는 옷을 기부하면 환경 보호에 기여할 수 있습니다. 재사용이 어려운 옷은 천 조각으로 만들어 활용할 수도 있어요.",
    created_at: "2025-02-06T11:30:00Z",
    hashtags: [
      { hashtag: { hashtag_id: 16, name: "재활용/분리수거" } },
      { hashtag: { hashtag_id: 17, name: "성공시 2,000pt" } },
    ],
    user: { user_id: 106, nickname: "UpcycleLover", profile_image_url: null },
    _count: { likes: 20, saves: 11 },
    comments: generateComments(70),
  },
  {
    id: '7',
    media: [{ media_url: "https://via.placeholder.com/150", media_type: "image" }],
    title: "전자제품 폐기물, 올바르게 처리하는 방법",
    content: "버려야 할 전자제품은 수거함을 이용해야 합니다. 배터리와 본체는 따로 분리해 배출하는 것이 중요합니다.",
    created_at: "2025-02-07T16:00:00Z",
    hashtags: [
      { hashtag: { hashtag_id: 19, name: "재활용/분리수거" } },
      { hashtag: { hashtag_id: 20, name: "성공시 3,000pt" } },
    ],
    user: { user_id: 107, nickname: "TechRecycler", profile_image_url: null },
    _count: { likes: 25, saves: 15 },
    comments: generateComments(80),
  }
];

