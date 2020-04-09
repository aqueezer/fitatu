import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const homePage = {
  url:               '',
  siteTitle:      $('h1 a')

}
export default {...basePage, ...homePage}