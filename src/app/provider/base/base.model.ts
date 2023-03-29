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
