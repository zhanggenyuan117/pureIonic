import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  carouselImg = [
    'https://gw.alicdn.com/tps/i4/TB1ij8pvQT2gK0jSZPcwu3KkpXa.png_790x10000.jpg_.webp',
    'https://gw.alicdn.com/imgextra/i4/1453939/O1CN01BuCnfu1ey6gky6D9q_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp',
    'https://gw.alicdn.com/imgextra/i3/30625/O1CN01LjK0uN1GUI7nIpv06_!!30625-0-lubanu.jpg_790x10000Q75.jpg_.webp',
    'https://gw.alicdn.com/imgextra/i2/1450893/O1CN019CjC201IT2GuwVLhj_!!1450893-0-lubanu.jpg_790x10000Q75.jpg_.webp',
    'https://gw.alicdn.com/imgextra/i1/1580533/O1CN01oV7RmT1Fo9gkollCV_!!1580533-0-lubanu.jpg_790x10000Q75.jpg_.webp'
  ]
  carouselImgOptions = {
    effect: 'flip',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    loop: true
  }
  landscapeImg = [
    {
      img: 'https://gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp',
      title: '聚划算'
    },
    {
      img: 'https://gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp',
      title: '苏宁易购'
    },
    {
      img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
      title: '领券'
    },
    {
      img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
      title: '充值缴费'
    }
  ];
  flashSale = [
    {
      img: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/95346/9/11502/184880/5e43e98fE262f21f1/159dd59bb8f55823.jpg.dpg',
      price: 209,
      longPrice: 270
    },
    {
      img: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/97036/9/12196/176270/5e44b61cE89b0f0ea/69276936df11ff7b.jpg.dpg',
      price: 1968,
      longPrice: 2590
    },
    {
      img: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/108102/4/5985/48299/5e463d5fE7d2186bf/6595e3d92775750d.jpg.dpg',
      price: 859,
      longPrice: 1100
    },
    {
      img: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/93229/6/12230/89867/5e44ecf4E5828b063/9f7500b6629f12b0.jpg.dpg',
      price: 719,
      longPrice: 1000
    },
    {
      img: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/87201/6/12218/149053/5e43a31eE77826267/26d0e8fa09a7281a.jpg.dpg',
      price: 1770,
      longPrice: 4270
    },
    {
      img: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/96564/3/12026/117842/5e421a64E717e2478/3133cb8cbaef971f.jpg.dpg',
      price: 1680,
      longPrice: 2280
    },
    {
      img: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/88419/18/10012/192096/5e142ca4E746ed14a/94d1d04ff78dd6c6.jpg.dpg',
      price: 2539,
      longPrice: 2560
    },
    {
      img: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/84986/15/11692/80645/5e395216E015c4296/f5f1f86c4ce5bf26.jpg.dpg',
      price: 79,
      longPrice: 160
    }
  ];
  guessWhatYouLike=[
    {
      lid:1,
      img:'https://gw.alicdn.com/bao/uploaded/i2/1628964424/O1CN01ngYTEk1iYEkfJQ12z_!!0-item_pic.jpg_290x10000Q75.jpg_.webp',
      price:26.8,
      synopsis:'床底灰尘刷 缝隙清洁神器家用打扫卫生工具扫灰除尘掸子 鸡毛禅子'
    },
    {
      lid:2,
      img:'https://gw.alicdn.com/bao/uploaded/i1/449513896/O1CN01CD85XP1eePYQCGSG9_!!0-item_pic.jpg_290x10000Q75.jpg_.webp',
      price:16.9,
      synopsis:'洗澡刷子搓软毛刷背不求人长柄背刷'
    },
    {
      lid:3,
      img:'https://gw.alicdn.com/bao/uploaded/i1/1133015326/O1CN01CBp86Y1pDM1Fij5h2_!!0-item_pic.jpg_290x10000Q75.jpg_.webp',
      price:23,
      synopsis:'毛绒沙发垫北欧现代简约沙发套罩欧式防滑沙发垫子坐垫沙发巾定做'
    },
    {
      lid:4,
      img:'https://gw.alicdn.com/bao/uploaded/i4/289268212/O1CN01F5Bhxy2AX94qKFXhc_!!0-item_pic.jpg_290x10000Q75.jpg_.webp',
      price:46.9,
      synopsis:'真维斯男装 2019秋装新款 韩版修身休闲圆领印花长袖t恤男'
    },
    {
      lid:5,
      img:'https://gw.alicdn.com/bao/uploaded/i1/3076460038/O1CN01BMh8K81C9Rbbh4Cvu_!!3076460038.jpg_290x10000Q75.jpg_.webp',
      price:59,
      synopsis:'落地家用客厅经济型简约小柜子书架'
    },
    {
      lid:6,
      img:'https://gw.alicdn.com/bao/uploaded/i1/112394247/O1CN01rdKm3U1hFAfq2FGAD_!!0-item_pic.jpg_290x10000Q75.jpg_.webp',
      price:599.9,
      synopsis:'太平鸟黑色外套女2019秋冬新款水果印花宽松外穿上衣棒球服ins潮'
    },
    {
      lid:7,
      img:'https://gw.alicdn.com/bao/uploaded/i3/818995812/TB21JVma25TBuNjSspcXXbnGFXa_!!818995812.png_290x10000.jpg_.webp',
      price:65,
      synopsis:'早教益智游戏撕不烂启蒙绘本玩具书'
    },
    {
      lid:8,
      img:'https://gw.alicdn.com/bao/uploaded/i1/2182659090/O1CN01nqIMxz2H1GnqpQgx6_!!0-item_pic.jpg_290x10000Q75.jpg_.webp',
      price:138,
      synopsis:'苎萝男加绒加厚宽松潮流小脚裤子'
    },
    {
      lid:9,
      img:'https://gw.alicdn.com/bao/uploaded/i1/2334142791/O1CN01GyyHde1WUJy79DIBb_!!2334142791.jpg_290x10000Q75.jpg_.webp',
      price:21.8,
      synopsis:'气质花朵后脑勺半扎头发夹弹簧夹'
    }
  ];
  flashSaleTime = 60;
  flashSaleTimeH=2;
  constructor() { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTimes();
  }
  getTimes(){
     setInterval(() => {
      this.flashSaleTime--;
    }, 1000);
  }
}