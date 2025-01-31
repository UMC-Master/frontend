import Image from './image.png';

export const dummyData = Array.from({ length: 1000 }, (_, index) => ({
  id: (index + 1).toString(),
  image: Image,
  text: [
    "자취생을 위한 꿀팁",
    "청소 쉽게 하는 방법",
    "절약 꿀팁 3가지",
    "요리 초보를 위한 레시피",
    "시간 절약하는 생활 팁",
  ][index % 5],
  likes: Math.floor(Math.random() * 5000) + 1000, // 1000~6000 사이 랜덤 값
  bookmarks: Math.floor(Math.random() * 5000) + 1000, // 1000~6000 사이 랜덤 값
  date: `2025.01.${String((index % 30) + 1).padStart(2, '0')}`,
}));
