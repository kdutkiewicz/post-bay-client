import {Category} from '../model/category';

export interface Question {
  id: number;
  content: string;
  answer: string;
  category: Category;
}
