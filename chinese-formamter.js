let data = {
  武汉: [{
      citytitle: "武汉",
      xxdetails: '武汉关山大道1',
      id: 1,
      qy: '湖北大厦1'
    },
    {
      citytitle: "武汉",
      xxdetails: '武汉关山大道2',
      id: 2,
      qy: '湖北大厦2'
    },
    {
      citytitle: "武汉",
      xxdetails: '武汉关山大道3',
      id: 3,
      qy: '湖北大厦3'
    },
    {
      citytitle: "武汉",
      xxdetails: '武汉关山大道4',
      id: 4,
      qy: '湖北大厦4'
    },
    {
      citytitle: "武汉",
      xxdetails: '武汉关山大道5',
      id: 5,
      qy: '湖北大厦5'
    },
    {
      citytitle: "武汉",
      xxdetails: '武汉关山大道6',
      id: 6,
      qy: '湖北大厦6'
    },
    {
      citytitle: "武汉",
      xxdetails: '武汉关山大道7',
      id: 7,
      qy: '湖北大厦7'
    }
  ],
  'shanghai': [{
    citytitle: "shanghai",
    xxdetails: '上海东方明珠',
    id: 1,
    qy: '黄浦江'
  }]
}

function chinesformamter(data) {
  let keys = Object.keys(data)
  let newresult = []
  if (keys && keys.length > 0) {
    keys.forEach((item) => {
      let obj = {
        listdata: []
      }
      obj.title = item
      if (data[obj.title].length > 0) {
        data[obj.title].forEach((item2) => {
          let newob1 = {}
          if (item2) {
            debugger
            if (item2.citytitle == obj.title) {
              newob1.citytitle = item2.citytitle
              newob1.id = item2.id
              newob1.xxdetails = item2.xxdetails
              newob1.qy = item2.qy
              obj.listdata.push(newob1)
            }
          }
        })
      }
      newresult.push(obj)
    })
    return newresult
  }
}

chinesformamter(data)