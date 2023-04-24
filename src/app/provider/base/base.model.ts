import * as moment from 'moment';

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
export class ChapterModal {
  id: string;
  name: string;
  price: number;
  createdAt: string;
  displayOrder: number;
  totalConcepts: number;
  totalExercises: number;
  totalLectures: number;
  subject: SubjectModal;
  chapterImage: string;
  isActive: boolean;
  topicList: Array<TopicModal> = [];
  topicPaginate: boolean;
  topicPage: number;
  topicProcessing: boolean;
  description: string;
  isSpecial: boolean;
  constructor(chapter) {
      chapter = chapter || {};
      this.id = chapter._id || '';
      this.name = chapter.name || '';
      this.price = chapter.price || 0;
      this.createdAt = chapter.createdAt || '';
      this.displayOrder = chapter.displayOrder || 0;
      if (chapter && chapter.subject) {
          this.subject = new SubjectModal((chapter.subject) ? chapter.subject : chapter.subjectId) || new SubjectModal({});
      }
      this.description = chapter.description || '';
      this.totalConcepts = chapter.totalConcepts || 0;
      this.totalExercises = chapter.totalExercises || 0;
      this.totalLectures = chapter.totalLectures || 0;
      this.chapterImage = (chapter && chapter.image && chapter.image.key) ? chapter.image.baseUrl + chapter.image.key : '';
      this.isActive = false;
      this.isSpecial = chapter.isSpecial || false;
      this.topicPage = 1;
  }

}

export class SubjectModal {
  id: string;
  name: string;
  price: number;
  status: string;
  displayOrder: number;
  imageUrl: string;
  isSpecial: boolean;
  totalTopics: number;
  totalChapters: number;
  totalLectures: number;
  totalExercises: number;
  description: Array<string> = [];
  newDesc: string;
  contentData: ContentDataModal;
  isPurchased: boolean;
  isActive: boolean;
  currentlist : Array<ChapterModal> = [];
  isHindiActive : boolean;
  constructor(subject) {
      this.id = subject._id || subject.id || '';
      this.name = subject.name || '';
      this.price = subject.price || 0;
      this.status = subject.status || '';
      this.totalTopics = subject.totalTopics || 0;
      this.totalChapters = subject.totalChapters || 0;
      this.newDesc = subject.description || '';
      this.description = this.newDesc.split(/\n/) || [];
      this.displayOrder = subject.displayOrder || 0;
      this.imageUrl = subject.image ? subject.image.baseUrl + subject.image.key : 'assets/icon/logo.png';
      this.totalLectures = subject.totalLectures || 0;
      this.totalExercises = subject.totalExercises || 0;
      this.isSpecial = subject.isSpecial || false;
      this.isPurchased = subject.isPurchased || false;
      this.isActive = false;
      this.currentlist = [];
      this.isHindiActive = true;
      const data = this.name.split(';');
      if (data && data.length > 0) {
          this.contentData = new ContentDataModal({});
          this.contentData.name = data[0] || '';
          this.contentData.marks = data[1] || '';
          this.contentData.questions = data[2] || '';
          this.contentData.duration = data[3] || '';
      }
  }
}


export class MainTopicModal {
  active: boolean;
  id: string;
  name: string;
  contents: Array<ContentModal> = [];
  contentPageNo = 1;
  contentPaginate: boolean;
  contentData: ContentDataModal;
  contentProcessing: boolean;
  imageId: FileModal;
  isActive: boolean;
  constructor(props) {
      this.active = false;
      this.id = props._id || '';
      this.name = props.name || '';
      this.contentPaginate = true;
      this.contentProcessing = true;
      this.isActive = false;
     if (props && props.imageId) {
         this.imageId = new FileModal(props.imageId) || new FileModal({});
     } else {
         this.imageId = new FileModal({});
     }
      if (this.name.length > 0) {
          const data = this.name.split(';');
          if (data && data.length > 0) {
              this.contentData = new ContentDataModal({});
              this.contentData.name = data[0] || '';
              this.contentData.marks = data[1] || '';
              this.contentData.questions = data[2] || '';
              this.contentData.duration = data[3] || '';
          }
      }
  }
}

export class TopicModal extends MainTopicModal {
  price: number;
  displayOrder: number;
  chapter: ChapterModal;
  activeContents: Array<ContentModal> = [];
  totalContentCount = 0;
  totalConcepts: number;
  totalFlashCards: number;
  totalLectures: number;
  totalExercises: number;
  description: string;
  img: string;
  descShred: Array<string> = [];

  constructor(topic) {
      super(topic);
      topic = topic || {};
      this.price = (topic && topic.price) ? topic.price : 0;
      this.displayOrder = (topic && topic.displayOrder) ? topic.displayOrder : 0;
      this.chapter = new ChapterModal((topic.chapter) ? topic.chapter : topic.chapterId);
      this.description = topic.description || '';
      this.totalConcepts = topic.totalConcepts || 0;
      this.totalFlashCards = topic.totalFlashCards || 0;
      this.totalLectures = topic.totalLectures || 0;
      this.totalExercises = topic.totalExercises || 0;

      this.img = 'assets/cbs-nn/crash_course/notes.svg';
      if (this.description.length > 0) {
          this.descShred = this.description.split(';');
      }
  }

}

export class SubTopicModel {

  _id: string;
  name: string;
  slug: string;
  imageId: FileModal;
  contentData: ContentDataModal;
  isActive:boolean;

  constructor(data) {
      data = data || {};
      this._id = data._id || '';
      this.name = data.name || '';
      this.slug = data.slug || '';
      this.isActive = false;
      if (data && data.imageId) {
          this.imageId = new FileModal(data.imageId) || new FileModal({});
      } else {
          this.imageId = new FileModal({});
      }
      if (this.name.length > 0) {
          const data = this.name.split(';');
          if (data && data.length > 0) {
              this.contentData = new ContentDataModal({});
              this.contentData.name = data[0] || '';
              this.contentData.marks = data[1] || '';
              this.contentData.questions = data[2] || '';
              this.contentData.duration = data[3] || '';
          }
      }
  }
}

export class ContentModal {
  id: string;
  title: string;
  type: string;
  isPurchased: boolean;
  isBookmarked: boolean;
  price: number;
  createdAt: string;
  contents: Array<any>;
  contentType: string;
  fileUrl: string;
  isAvailableFromPoints: boolean;
  topic: any;
  restrictContent: boolean;
  restrictionCount: number;
  totalConsumed: number;
  isLive: boolean;
  commentCount: number;
  upvoteCount: number;
  isLiked: boolean;
  shareCount: number;
  ratingCount: number;
  totalWatchTime: number;
  totalDuration: number;
  myRating: RatingModal;
  availableOn: Array<string> = [];
  publishDate: string;
  avgRating: AverageRatingModal;
  onMobile: boolean;
  actions: Array<string> = [];
  contentData: ContentDataModal;
  imageUrl: string;
  showNewTag: boolean;
  isImportant: boolean;
  programId: string;
  isActive: boolean;
  constructor(content) {
      content = content || {};
      this.topic = content.topic || {};
      this.id = content._id || '';
      this.title = content.title || '';
      this.type = content.type || '';
      this.programId = content.programId || '';
      this.isPurchased = content.isPurchased || false;
      this.isBookmarked = content.isBookmarked || false;
      this.isActive = false;
      this.price = content.price || 0;
      this.createdAt = content.createdAt || '';
      this.isAvailableFromPoints = content.isAvailableFromPoints || false;
      this.contents = content.content || [];
      this.availableOn = content && content.availableFor || [];
      this.onMobile = this.availableOn.length === 1 && this.availableOn.indexOf('MOBILE') > -1;
      if (this.contents.length > 0) {
          this.contents.forEach((item) => {
              if (this.type === 'FlashCard') {
                  this.contentType = 'FlashCard';
              } else if (this.type.toLowerCase().trim() === 'podcast' || this.type.toLowerCase().trim() === 'prodcast') {
                  this.contentType = 'Podcast';
              } else if (item && (!this.contentType || this.contentType === '')) {
                  if (this.type === 'Concept' && item.fileId) {
                      this.contentType = 'pdf';
                  } else if (this.type === 'Lecture' && (item.videoId || item.videoType === 'vimeo')) {
                      this.contentType = 'video';
                  } else if (this.type === 'Lecture' && (item.videoUrl || item.videoType === 'youtube')) {
                      this.contentType = 'youtube';
                  } else if (item.text) {
                      this.contentType = 'imageAndText';
                  } else if (item.exerciseId) {
                      this.contentType = 'exercise';
                  } else if (item.imageId) {
                      this.contentType = 'imageSlider';
                  } else {
                      this.contentType = 'imageAndText';
                  }
              } else if (item.fileUrl) {
                  this.fileUrl = item.fileUrl;
                  this.contentType = 'ebook';
              }

              if (this.contentType === 'pdf') {
                  item['status'] = 'downloads';
                  item['iconUrl'] = 'assets/icons/download.png';
              }
          });
      }
      this.contentType = (!this.contentType || this.contentType === '') ? (content && content.type) ? content.type.toLowerCase() : '' : this.contentType;
      this.restrictContent = content.restrictContent || false;
      this.restrictionCount = content.restrictionCount || 0;
      this.isLive = content.isLive || false;
      this.isLiked = content.isLiked || false;
      this.commentCount = content.commentCount || 0;
      this.upvoteCount = content.upvoteCount || 0;
      this.commentCount = content.commentCount || 0;
      this.shareCount = content.shareCount || 0;
      this.ratingCount = content.ratingCount || 0;
      this.totalConsumed = content.totalConsumed || 0;
      this.totalWatchTime = content.totalWatchTime || 0;
      this.totalDuration = 0;
      this.actions = content.actions || [];
      if (content && content.myRating) {
          this.myRating = new RatingModal(content.myRating) || new RatingModal({});
      } else {
          this.myRating = new RatingModal({});
      }
      if (this.type === 'Exercise') {
          this.publishDate = this.contents[0]['exerciseId']['minStartTime'] || '';
      } else {
          this.publishDate = content.publishDate || '';
      }
      if (content && content.avgRating && content.avgRating.avgRating) {
          this.avgRating = new AverageRatingModal(content.avgRating) || new AverageRatingModal({});
      } else {
          this.avgRating = new AverageRatingModal({});
      }
      const data = this.title.split(';');
      if (data && data.length > 0) {
          this.contentData = new ContentDataModal({});
          this.contentData.name = data[0] || '';
          this.contentData.marks = data[1] || '';
          this.contentData.questions = data[2] || '';
          this.contentData.duration = data[3] || '';
      }
      if (content && content.imageId && content.imageId.key) {
          this.imageUrl = content.imageId.baseUrl + content.imageId.key;
      } else {
          this.imageUrl = '';
      }
      if (this.publishDate.length > 0) {
          const now = moment().startOf('day');
          // console.log(moment.duration(moment(this.publishDate).diff(now)).asDays());
          this.showNewTag = moment.duration(moment(this.publishDate).diff(now)).asDays() > -15 && moment.duration(moment(this.publishDate).diff(now)).asDays() < 1;
      } else {
          this.showNewTag = false;
      }
      this.isImportant = content.isImportant || false;
  }
}

export class AverageRatingModal {
  avgRating: number;
  typeId: string;

  constructor(props) {
      props = props || {};
      this.avgRating = props.avgRating || 0;
      this.typeId = props.typeId || '';
  }
}

export class TestDetailsModel {

  id: string;
  name: string;
  testActivityStatus: string;
  testId: string;
  studentId: string;
  startedAt: string;
  lastVisitedQuestionId: string;
  endAt: string;
  duration: number;
  viewed: number;
  notViewed: number;
  attempted: number;
  markUnderReviewUnAttempted: number;
  markUnderReviewAttempted: number;
  totalQuestions: number;
  type: string;

  constructor(testDetail, name?) {
      this.id = testDetail._id;
      this.name = name;
      this.testActivityStatus = testDetail.testActivityStatus;
      this.testId = testDetail.testId;
      this.studentId = testDetail.studentId;
      this.startedAt = testDetail.startedAt;
      this.lastVisitedQuestionId = testDetail.lastVisitedQuestionId || '';
      this.endAt = testDetail.endAt;
      this.duration = testDetail.duration;
      this.totalQuestions = testDetail.totalQuestions || 0;
      this.viewed = testDetail.viewed || 0;
      this.notViewed = testDetail.notViewed || 0;
      this.attempted = testDetail.attempted || 0;
      this.markUnderReviewUnAttempted = testDetail.markUnderReviewUnAttempted || 0;
      this.markUnderReviewAttempted = testDetail.markUnderReviewAttempted || 0;
      this.type = testDetail.type || 'Regular';
  }
}

export class SectionModel {

  id: string;
  name: string;
  subjectId: string;
  showQuestions: boolean;
  questions: Array<QuestionDetailModel> = [];
  isOptional: boolean;
  type: string;
  isAttempted: boolean;
  isSelected: boolean;

  constructor(section, testDetails) {
      this.id = section._id || '';
      this.name = section.name || '';
      this.subjectId = section.subjectId || '';
      this.showQuestions = false;
      this.questions = [];
      this.isOptional = section.isOptional || false;
      if (this.isOptional === true) {
          this.type = 'Optional';
      } else {
          this.type = 'Compulsory';
      }
      this.isAttempted = false;
      this.isSelected = false;
      section.questions.forEach((item) => {
          const question = new QuestionDetailModel(item);
          switch (question.status.toLowerCase()) {
              case 'viewed':
                  testDetails.viewed++;
                  break;
              case 'notviewed':
                  testDetails.notViewed++;
                  break;
              case 'attempted':
                  testDetails.attempted++;
                  break;
              case 'underreviewattempted':
                  testDetails.markUnderReviewAttempted++;
                  break;
              case 'underreviewunattempted':
                  testDetails.markUnderReviewUnAttempted++;
                  break;
              default:
                  testDetails.viewed++;
          }
          this.questions.push(question);
      });
  }
}

export class QuestionDetailModel {

  id: string;
  markedSolutions: Array<string> = [];
  markedSolutionText: string;
  sectionId: string;
  status: string;
  timeTaken: number;
  reviewLater: boolean;
  questionId: string;
  question: QuestionModel;
  isSubmitted: boolean;

  constructor(questionDetail) {
      this.id = questionDetail._id || '';
      this.markedSolutions = questionDetail.markedSolutions || [];
      this.markedSolutionText = questionDetail.markedSolutionText || '';
      this.sectionId = questionDetail.sectionId || '';
      this.status = questionDetail.status || '';
      this.timeTaken = questionDetail.timeTaken || 0;
      this.reviewLater = (questionDetail.status === 'UnderReviewAttempted' || questionDetail.status === 'UnderReviewUnAttempted') || false;
      this.questionId = questionDetail.questionId || '';
      this.question = new QuestionModel(questionDetail.question, this.markedSolutions) || new QuestionModel({}, []);
      if (questionDetail.question.type === 'Subjective') {
          this.isSubmitted = true;
      } else {
          this.isSubmitted = !!(this.markedSolutions.length || this.markedSolutionText) || false;
      }
  }
}

export class QuestionModel {

  id: string;
  text: string;
  image: string;
  base64: string;
  type: string;
  displayOrder: number;
  options: Array<OptionModel> = [];
  solutions: Array<string>;
  showSolutions: boolean;
  isBookmarked = false;
  solutionDescription: Array<any>;
  selectedOption: any;
  videoDetails: any;
  tags: Array<TagModal> = [];
  isLoading: boolean;
  solutionText: string;
  solutionTextMax: string;
  negativeMarks: number;
  positiveMarks: number;

  constructor(question, markedSolutions) {
      this.id = question._id || question.id || '';
      this.text = question.text || '';
      this.image = (question.imageId) ? question.imageId.baseUrl + question.imageId.key : (question.image) ? question.image.baseUrl + question.image.key : '';
      this.videoDetails = (question && question.videoDetails) ? question.videoDetails : {};
      this.type = question.type || '';
      this.base64 = question.base64 || '';
      this.displayOrder = question.displayOrder;
      this.options = [];
      if (question && question.options && question.options.length > 0) {
          question.options.forEach((item) => {
              const option = new OptionModel(item, question.solutions, markedSolutions);
              this.options.push(option);
          });
      }
      this.showSolutions = true;
      this.isBookmarked = question.isBookmarked || false;
      this.solutionText = question.solutionText || '';
      this.solutionTextMax = question.solutionTextMax || '';
      this.solutions = question.solutions || [];
      this.solutionDescription = question.solutionDescription || [];
      this.selectedOption = {};
      this.isLoading = false;
      this.negativeMarks = question.negativeMarks || 0;
      this.positiveMarks = question.positiveMarks || 0;
      if (question && question.tags && question.tags.length > 0) {
          question.tags.forEach(item => {
              this.tags.push(new TagModal(item));
          });
      } else {
          this.tags = [];
      }
  }
}

export class OptionModel {
  id: string;
  text: string;
  image: string;
  base64: string;
  isSelected: boolean;
  isSolution: boolean;

  constructor(option, solutionIds, markedSolutions) {
      this.id = option._id || '';
      this.base64 = option.base64 || option._id || '';
      this.text = option.text || '';
      this.isSelected = option.isSelected || (markedSolutions.indexOf(option._id) >= 0) || false;
      this.isSolution = (solutionIds && solutionIds.indexOf(option._id) >= 0) || false;
      this.image = (option.imageId) ? option.imageId.baseUrl + option.imageId.key : (option.image) ? option.image.baseUrl + option.image.key : '';

  }
}

export class SubmitModal {
  markedSolutions: Array<string> = [];
  markedSolutionText: string;
  status: string;
  timeTaken: number;
  questionId: string;
  isBookmarked = false;

  constructor(submitDetails) {
      this.markedSolutions = submitDetails.markedSolutions || [];
      this.markedSolutionText = submitDetails.markedSolutionText || '';
      this.status = submitDetails.status || '';
      this.isBookmarked = submitDetails.question.isBookmarked || false;
      this.timeTaken = submitDetails.timeTaken || 0;
      this.questionId = submitDetails.questionId || submitDetails.question.id || '';
  }
}


export class ContentDataModal {
  name: string;
  duration: string;
  questions: string;
  marks: string;

  constructor(props) {
      props = props || {};
      this.name = props.name || '';
      this.duration = props.durations || '';
      this.questions = props.questions || '';
      this.marks = props.marks || '';
  }
}
export class RatingModal {
  id: string;
  rating: string;
  createdBy: string;

  constructor(props) {
      this.id = props._id || '';
      this.rating = props.rating || '';
      if (props && props.createdBy && props.createdBy._id) {
          this.createdBy = props.createdBy._id || '';
      }

  }
}

export class TagModal {
  id: string;
  name: string;
  type: string;
  isActive: boolean;

  constructor(tag) {
      this.id = tag.id || tag._id || '';
      this.name = tag.name || tag.title || '';
      this.type = tag.type || '';
      this.isActive = false;
  }

}

export class NewSuggestedVideoModal {
  image: string;
  name: string;
  duration: string;
  id: string;
  cardType: string;
  embedCode: string;
  imageUrl: string;

  constructor(suggestedVideo) {
      //console.log(suggestedVideo);
      this.id = (suggestedVideo && suggestedVideo._id) ? suggestedVideo._id : '';

      this.duration = (suggestedVideo && suggestedVideo.duration) ? suggestedVideo.duration.toString() : '';
      this.image = this.returnImage(suggestedVideo);
      this.imageUrl = this.returnImage(suggestedVideo);
      this.name = suggestedVideo.name || suggestedVideo.title || 'Default name';
      this.embedCode = this.returnVideoUrl(suggestedVideo);
      this.cardType = this.returnVideoType(this.embedCode);
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

  returnVideoType(url: string) {
      if (url.includes('www.youtube.com')) {
          return `youtube`;
      } else if (url.includes('player.vimeo')) {
          return `vimeo`;
      } else {
          return 'video';
      }
  }
}

