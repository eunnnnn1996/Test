const qnaList = [
    {
      q: '1. 좋아하는 자연과 경치',
      a: [
        { answer: 'a. 넓게 펼쳐져 있는 평야', type: ['france', 'mongol', 'china'] },
        { answer: 'b. 바닷가와 해변', type: ['uk', 'korea', 'newzealand', 'vietnam', 'tiwan'] },
        { answer: 'c. 고층빌딩과 도시의 야경', type: ['usa', 'japan' ] },
      ]
    },
    {
      q: '2. 좋아하는 시간 보내기 방법 ',
      a: [
        { answer: 'a. 맛집을 찾아다닌다', type: ['france', 'korea', 'tiwan'] },
        { answer: 'b. 쇼핑을 좋아한다. ', type: ['china', 'uk', 'usa', 'japan'] },
        { answer: 'c. 박물관이나 유적을 좋아한다. ', type: ['mongol', 'newzealand', 'vietnam'] },
      ]
    },
    {
      q: '3. 내가 끌리는 성격유형',
      a: [
        { answer: 'a. 자유롭다', type: ['mongol', 'newzealand', 'usa'] },
        { answer: 'b. 쿨하다', type: ['china', 'france', 'uk','vietnam'] },
        { answer: 'c. 섬세하다', type: ['korea', 'tiwan', 'japan'] }
      ]
    },
    {
      q: '4. 지구 멸망 일주일전에 하고 싶은 것',
      a: [
        { answer: 'a. 멀리멀리 여행떠나기 ', type: ['mongol', 'newzealand'] },
        { answer: 'b. 여러 사람들과 이야기 나누기  ', type: ['china', 'uk', 'vietnam', 'tiwan', 'japan' ] },
        { answer: 'c. 축제 즐기기 ', type: ['france', 'korea', 'usa'] },
      ]
    },
    {
      q: '5. 일을 마치고 어떤걸 마실건가?',
      a: [
        { answer: 'a. 따뜻한 우유', type: ['mongol', 'newzealand', 'vietnam', 'japan'] },
        { answer: 'b. 따뜻한 차', type: ['china', 'uk', 'tiwan']},
        { answer: 'c. 술', type: ['france', 'korea', 'usa'] },
      ]
    },
  
    {
      q: '6. 로또에 당첨 된다면?',
      a: [
        { answer: 'a. 멋진차와 건물 구매', type: ['china', 'usa'] },
        { answer: 'b. 인적 드문 넓은 곳에 별장 짓기', type: ['mongol', 'newzealand', 'vietnam', 'tiwan' ] },
        { answer: 'c. 먹고 놀고 신나게 즐기기', type: ['france', 'uk', 'korea', 'japan'] },
      ]
    },
    {
      q: '7. 가장 먹고 싶은 것',
      a: [
        { answer: 'a. 길거리 음식', type: ['china', 'mongol', 'vietnam','tiwan' ] },
        { answer: 'b. 저렴한 로컬푸드', type: ['uk', 'korea', 'newzealand' ] },
        { answer: 'c. 비싼 고급 음식', type: ['france', 'usa', 'japan'] },
      ]
    }
  ]
  
  const infoList = [
    {
      name: '사람 많고 독보적인 문화를 가진 <중국>',
      desc: '당신은 100% 중국인 입니다'
    },
    {
      name: '멋진 자연과 여유로운 <프랑스>',
      desc: '당신은 100% 프랑스인 입니다'
    },
    {
      name: '여행을 좋아하고 조용한 <몽골>',
      desc: '당신은 100% 몽골인 입니다'
    },
    {
      name: '멋진 바닷가가 있는 <영국>',
      desc: '당신은 100% 영국인 입니다'
    },
    {
      name: '다양한 먹거리와 즐길거리가 있는 <한국>',
      desc: '당신은 100% 한국인 입니다'
    },
    {
      name: '멋진 자연이 있어 여행가기 좋은 <뉴질랜드>',
      desc: '당신은 100% 뉴질랜드인 입니다'
    },
    {
      name: '사람이 많고 볼거리가 많은 <베트남>',
      desc: '당신은 100% 베트남인 입니다'
    },
    {
      name: '멋진 자연과 멋진 건물들이 있는 <대만>',
      desc: '당신은 100% 대만인 입니다'
    },
    {
      name: '다양한 즐길거리와 자유가 보장된 <미국>',
      desc: '당신은 100% 미국인 입니다'
    },
    {
      name: '다양한 음식과 자연, 문화가 있는 <일본>',
      desc: '당신은 100% 일본인 입니다'
    }
  ]