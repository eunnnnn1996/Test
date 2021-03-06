/*
 'france'0
 'mongol'1
 'china'2
 'uk'3
 'korea'4
 'newzealand'5
 'vietnam'6
 'tiwan'7
 'usa'8
 'japan'9
*/

const qnaList = [
    {
      q: '1. 좋아하는 자연과 경치',
      a: [
        { answer: 'a. 넓게 펼쳐져 있는 평야', type: ['0', '1', '2'] },
        { answer: 'b. 바닷가와 해변', type: ['3', '4', '5', '6', '7'] },
        { answer: 'c. 고층빌딩과 도시의 야경', type: ['8', '9' ] },
      ]
    }, // 여기까지가 qnaList[0] 리스트
    {
      q: '2. 좋아하는 시간 보내기 방법 ',
      a: [
        { answer: 'a. 맛집을 찾아다닌다', type: ['0', '4', '7'] },
        { answer: 'b. 쇼핑을 좋아한다. ', type: ['2', '3', '8', '9'] },
        { answer: 'c. 박물관이나 유적을 좋아한다. ', type: ['1', '5', '6'] },
      ]
    },
    {
      q: '3. 내가 끌리는 성격유형',
      a: [
        { answer: 'a. 자유롭다', type: ['1', '5', '8'] },
        { answer: 'b. 쿨하다', type: ['2', '0', '3','6'] },
        { answer: 'c. 섬세하다', type: ['4', '7', '9'] }
      ]
    },
    {
      q: '4. 지구 멸망 일주일전에 하고 싶은 것',
      a: [
        { answer: 'a. 멀리멀리 여행떠나기 ', type: ['1', '5'] },
        { answer: 'b. 여러 사람들과 이야기 나누기  ', type: ['2', '3', '6', '7', '9' ] },
        { answer: 'c. 축제 즐기기 ', type: ['0', '4', '8'] },
      ]
    },
    {
      q: '5. 일을 마치고 어떤걸 마실건가?',
      a: [
        { answer: 'a. 따뜻한 우유', type: ['1', '5', '6', '9'] },
        { answer: 'b. 따뜻한 차', type: ['2', '3', '7']},
        { answer: 'c. 술', type: ['0', '4', '8'] },
      ]
    },
  
    {
      q: '6. 로또에 당첨 된다면?',
      a: [
        { answer: 'a. 멋진차와 건물 구매', type: ['2', '8'] },
        { answer: 'b. 인적 드문 넓은 곳에 별장 짓기', type: ['1', '5', '6', '7' ] },
        { answer: 'c. 먹고 놀고 신나게 즐기기', type: ['0', '3', '4', '9'] },
      ]
    },
    {
      q: '7. 가장 먹고 싶은 것',
      a: [
        { answer: 'a. 길거리 음식', type: ['2', '1', '6','7' ] },
        { answer: 'b. 저렴한 로컬푸드', type: ['3', '4', '5' ] },
        { answer: 'c. 비싼 고급 음식', type: ['0', '8', '9'] },
      ]
    }
  ]
  
  const infoList = [
    {

      name: '<프랑스>',
      desc: '당신은 100% 프랑스인 입니다'
    },
    {
      name: '<몽골>',
      desc: '당신은 100% 몽골인 입니다'
    },
    {

      name: '<중국>',
      desc: '당신은 100% 중국인 입니다'
    },
    {
      name: '<영국>',
      desc: '당신은 100% 영국인 입니다'
    },
    {
      name: '<대한민국>',
      desc: '당신은 100% 한국인 입니다'
    },
    {
      name: '<뉴질랜드>',
      desc: '당신은 100% 뉴질랜드인 입니다'
    },
    {
      name: '<베트남>',
      desc: '당신은 100% 베트남인 입니다'
    },
    {
      name: '<대만>',
      desc: '당신은 100% 대만인 입니다'
    },
    {
      name: '<미국>',
      desc: '당신은 100% 미국인 입니다'
    },
    {
      name: '<일본>',
      desc: '당신은 100% 일본인 입니다'
    }
  ]