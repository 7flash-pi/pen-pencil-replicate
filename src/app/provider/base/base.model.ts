export class NotificationModal {
  createdAt: string;
  isRead: boolean;
  isSend: boolean;
  text: string;
  title: string;
  type: string;
  _id: string;
  campaignId: CampaignModal;
  color: string;
  colors = ['#6E69DB', '#F1995E', '#67AC70', '#4FADDF'];

  constructor(props) {
      this.createdAt = props.createdAt || '';
      this.isRead = props.isRead || false;
      this.isSend = props.isSend || false;
      this.text = props.text || '';
      this.title = props.title || '';
      this.type = props.type || '';
      this._id = props._id || '';
      this.color = this.randomColor(this.colors);
      if (props && props.campaignId && props.campaignId._id) {
          this.campaignId = new CampaignModal(props.campaignId);
      } else {
          this.campaignId = new CampaignModal({});
      }
  }

  randomColor(arr) {
      const tempColorIndex = Math.floor(Math.random() * arr.length);
      return arr[tempColorIndex];
  }

}
export class CampaignModal {
  actionType: string;
  metaData: any;
  page: string;
  _id: string;

  constructor(props) {
      props = props || {};
      this.actionType = props.actionType || '';
      this.metaData = props.metaData || {};
      this.page = props.page || '';
      this._id = props._id || '';
  }

}

export class BannerModal {
  title: string;
  actionUrl: string;
  image: FileModal;

  constructor(props) {
      props = props || {};
      this.title = props.title || '';
      this.actionUrl = props.actionUrl || '';
      this.image = new FileModal(props.image || {});
  }
}
export class FileModal {
  _id: string;
  baseUrl: string;
  key: string;
  name: string;
  url: string;
  status: string;
  iconUrl: string;

  constructor(data) {
      const file = data || {};
      this._id = file._id || '';
      this.baseUrl = file.baseUrl || '';
      this.key = file.key || '';
      this.name = file.name || '';
      this.url = this.baseUrl + this.key || '';
      this.status = '';
      this.iconUrl = '';
  }

}

export class PlanModal {
  orderDetails: OrderDetailModal;
  paymentSource: string;
  price: number;
  createdAt: string;
  id: string;

  constructor(plan) {
      this.id = plan._id || '';
      this.createdAt = plan.createdAt || '';
      this.price = plan.price || 0;
      this.paymentSource = plan.paymentSource || '';
      this.orderDetails = new OrderDetailModal(plan.orderDetails[0]);
  }
}

export class OrderDetailModal {
  expireAt: string;
  startAt: string;
  expiryDuration: number;
  name: string;
  quantity: number;
  remainingDays: number;
  wallet: number;
  id: string;
  description: string;
  type: string;
  createdAt: string;
  package: PackageModal;

  constructor(orderDetail) {
      this.type = orderDetail.type || '';

      this.createdAt = orderDetail.createdAt;
      if (this.type !== '') {
          this.package = new PackageModal(orderDetail[(orderDetail.type === 'TEST_CATEGORY') ? 'testCategory' : orderDetail.type.toLowerCase()]);
      } else {
          this.package = new PackageModal({});
      }

      this.expireAt = orderDetail.expireAt || '';
      this.startAt = orderDetail.startAt || '';
      this.expiryDuration = orderDetail.expireDuration || 0;
      this.name = orderDetail.name || '';
      this.quantity = orderDetail.quantity || 0;
      this.remainingDays = orderDetail.remainingDays || 0;
      this.wallet = orderDetail.wallet || 0;
      this.id = orderDetail._id || '';
      this.description = orderDetail.description || '';
  }
}

export class PackageModal {
  id: string;
  expiryDuration: any;
  programId: string;

  constructor(item) {
      this.programId = item.program || '';
      this.id = item._id || '';
      this.expiryDuration = item.expiryDuration || '-1';
  }
}
export class VideoGalleryModal {
  title: string;
  videos: Array<SuggestedVideoModal> = [];

  constructor(props) {
      this.title = props.title || '';
      if (props && props.videoUrls && props.videoUrls.length > 0) {
          props.videoUrls.forEach(item => {
              this.videos.push(new SuggestedVideoModal(item));
          });
      } else {
          this.videos = [];
      }

  }
}
export class SuggestedVideoModal {
  image: string;
  name: string;
  duration: string;
  id: string;
  cardType: string;
  embedCode: string;
  imageUrl: string;

  constructor(suggestedVideo) {
      suggestedVideo = suggestedVideo || {};
      this.cardType = 'vimeo';
      this.id = (suggestedVideo && suggestedVideo._id) ? suggestedVideo._id : '';
      this.duration = (suggestedVideo && suggestedVideo.duration) ? suggestedVideo.duration.toString() : '';
      this.image = this.returnImage(suggestedVideo);
      this.imageUrl = this.returnImage(suggestedVideo);
      this.name = suggestedVideo.title || suggestedVideo.name || 'Default name';
      this.embedCode = this.returnVideoUrl(suggestedVideo);
  }

  returnImage(video) {
      if (video && video.image) {
          return video.image;
      } else if (video && video.thumbnail_url) {
          return video.thumbnail_url;
      } else {
          return 'assets/video_default.png';
      }
  }

  returnVideoUrl(video) {
      if (video && video.embedCode) {
          return video.embedCode;
      } else if (video && video.hls_url) {
          return video.hls_url;
      } else {
          return '';
      }
  }

}
