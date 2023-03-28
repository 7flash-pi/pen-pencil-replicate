import { TestBed } from '@angular/core/testing';

import { NewsAndBlogService } from './news-and-blog.service';

describe('NewsAndBlogService', () => {
  let service: NewsAndBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsAndBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
