# Seonghoon Yu — Personal Homepage

Jon Barron 스타일의 정적 학술 홈페이지. 빌드 과정 없음.

## 파일

| 파일 | 내용 |
|---|---|
| `index.html` | About Me 문구, 연락처 링크, 프로필 사진 경로 |
| `publications.js` | 논문 목록 데이터 |
| `main.js` | 논문 목록 렌더링, BibTeX 생성 |
| `style.css` | 스타일 (라이트/다크 자동, 모바일 대응) |
| `assets/` | 프로필 사진, 논문 teaser 이미지 |

## 자주 하는 수정

- **논문 추가**: `publications.js`의 `PUBLICATIONS` 배열 맨 위에 항목 하나 추가
- **teaser 이미지**: `assets/teasers/`에 넣고 해당 논문의 `teaser`에 경로 입력
- **프로필 사진**: `assets/`에 넣고 `index.html`의 `<img src=...>` 수정

## 로컬 미리보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 배포 (GitHub Pages)

1. GitHub에 `<username>.github.io` 저장소 생성
2. 이 폴더를 push
3. Settings → Pages → Branch: `main` / `(root)`
