export interface MenuListType {
  group: string
  items: {
    path: string
    name: string
  }[]
}

export const MENU_LIST: MenuListType[] = [
  {
    group: '유저 관리',
    items: [
      {
        path: '/',
        name: '일반 유저',
      },
      {
        path: '/',
        name: '정지 유저',
      },
      {
        path: '/',
        name: '탈퇴 유저',
      },
    ],
  },
  {
    group: '피드백 관리',
    items: [
      {
        path: '/',
        name: '피드백',
      },
    ],
  },
  {
    group: '유저 신고/내보내기 관리',
    items: [
      {
        path: '/',
        name: '신고 내역',
      },
      {
        path: '/',
        name: '내보내기 내역',
      },
    ],
  },
  {
    group: '프로젝트 관리',
    items: [
      {
        path: '/',
        name: '전체 프로젝트',
      },
      {
        path: '/',
        name: '프로젝트 신고 내역',
      },
      {
        path: '/',
        name: '숨겨진 프로젝트',
      },
    ],
  },
  {
    group: '배너 관리',
    items: [
      {
        path: '/',
        name: '메인 배너 등록',
      },
    ],
  },
]
