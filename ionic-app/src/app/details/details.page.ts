import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  lid: string;
  details = [
    {
      lid: 1,
      imgs: [
        'https://img.alicdn.com/imgextra/i1/1628964424/O1CN01XhbkyU1iYEkay37uJ_!!1628964424.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/1628964424/O1CN01EbCo8e1iYEkZO4WoQ_!!1628964424.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/1628964424/O1CN01FOtXYT1iYEkZO2mhW_!!1628964424.jpg_760x760Q50s50.jpg_.webp'
      ],
      price: '26.8',
      del: 60,
      dell: '床底灰尘刷 缝隙清洁神器家用打扫卫生工具扫灰除尘掸子 鸡毛禅子'
    },
    {
      lid: 2,
      imgs: [
        'https://img.alicdn.com/imgextra/i2/449513896/O1CN01EXs83i1eePYSPiWm6_!!449513896.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/449513896/O1CN01M8MCup1eePYSPgaDY_!!449513896.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/449513896/O1CN01y0X0yj1eePYQP167A_!!449513896.jpg_760x760Q50s50.jpg_.webp'
      ],
      price: '16.9',
      del: 62,
      dell: '洗澡刷子搓背刷长柄搓澡软毛浴刷擦背神器刷背强力不求人女士专享'
    },
    {
      lid: 3,
      imgs: [
        'https://img.alicdn.com/imgextra/i1/1133015326/O1CN0151sgIX1pDM0DEDjPI_!!1133015326.jpg_760x760Q50s50.jpg',
        'https://img.alicdn.com/imgextra/i4/1133015326/O1CN0152Na8c1pDM1aKG5ug_!!1133015326.jpg_760x760Q50s50.jpg',
        'https://img.alicdn.com/imgextra/i3/1133015326/O1CN014k8wdS1pDM1e3gDT1_!!1133015326.jpg_760x760Q50s50.jpg'
      ],
      price: '23-106',
      del: 57 - 265,
      dell: '毛绒沙发垫北欧现代简约沙发套罩欧式防滑沙发垫子坐垫沙发巾定做'
    },
    {
      lid: 4,
      imgs: [
        'https://img.alicdn.com/imgextra/i3/3496582805/O1CN01oDeN5O1WajXZmg8hV_!!3496582805.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3496582805/O1CN01jjBltJ1WajXVeTbhq_!!3496582805.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3496582805/O1CN01WNIJ401WajXTRwDGh_!!3496582805.jpg_760x760Q50s50.jpg_.webp'
      ],
      price: '79-118',
      del: 197,
      dell: '男士长袖t恤2019新款秋冬韩版男装潮流帅气纯棉圆领衣服修身体桖'
    },
    {
      lid: 5,
      imgs: [
        'https://img.alicdn.com/imgextra/i1/3076460038/O1CN01kyfwvk1C9RdT8q6IM_!!3076460038-0-pixelsss.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/3076460038/O1CN01mYmyGW1C9Rbb7k8xc_!!3076460038.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3076460038/O1CN01x4IvT01C9RbdyFwf1_!!3076460038.jpg_760x760Q50s50.jpg_.webp'
      ],
      price: '38-109',
      del: 76,
      dell: '简易书架置物架落地书柜简约家用学生桌面小柜子客厅经济型储物柜'
    },
    {
      lid: 6,
      imgs: [
        'https://img.alicdn.com/imgextra/i3/1625248371/O1CN01JqbcCs2Bhy3HmaruF_!!1625248371.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/112394247/O1CN010OeUrF1hFAeEZWIhz_!!112394247.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/112394247/O1CN01t7FqIZ1hFAe9uVYY4_!!112394247.jpg_760x760Q50s50.jpg_.webp'
      ],
      price: '599.9',
      del: 1099,
      dell: '太平鸟黑色外套女2019秋冬新款水果印花宽松外穿上衣棒球服ins潮'
    },
    {
      lid: 7,
      imgs: [
        'https://img.alicdn.com/imgextra/i3/741925296/O1CN01Jfkt1S1ozc7yqy2K3_!!741925296.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/741925296/TB2pNKxxYGYBuNjy0FoXXciBFXa_!!741925296.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/741925296/TB2lrSSiBjTBKNjSZFDXXbVgVXa_!!741925296.jpg_760x760Q50s50.jpg_.webp'
      ],
      price: '65',
      del: 120,
      dell: '一玩再玩 宝宝好习惯玩具书 全套4册 0-1-2-3-6岁婴幼儿早教认知益智绘本 一起刷牙 洞洞游戏书撕不烂启蒙翻翻看 儿童亲子读物书籍'
    },
    {
      lid: 8,
      imgs: [
        'https://img.alicdn.com/imgextra/i3/2182659090/O1CN01BxHr3m2H1Gnsw70mn_!!2182659090.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/2182659090/O1CN01cJdoQ12H1GnqpLJvK_!!2182659090.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/2182659090/O1CN01NaRxEs2H1GnvwreJX_!!2182659090.jpg_760x760Q50s50.jpg_.webp'
      ],
      price: '138',
      del: 269,
      dell: '苎萝工装裤男秋冬款加绒加厚束脚裤子男韩版潮流宽松休闲小脚裤子'
    },
    {
      lid: 9,
      imgs: [
        'https://img.alicdn.com/imgextra/i1/2334142791/O1CN01GyyHde1WUJy79DIBb_!!2334142791.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/2334142791/O1CN01SPJjnC1WUJy78ik8a_!!2334142791.jpg_760x760Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/2334142791/O1CN01T5gzv71WUJyBGfCdS_!!2334142791.jpg_760x760Q50s50.jpg_.webp'
      ],
      price: '21.8',
      del: 35,
      dell: '妈妈发夹顶夹气质花朵弹簧夹发卡头饰后脑勺半扎马尾夹头发夹韩国'
    }
  ];
  carouselImgOptions = {
    effect: 'flip',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    loop: true
  }
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.lid = this.router.snapshot.params.lid;
    console.log(this.lid);

  }

}
