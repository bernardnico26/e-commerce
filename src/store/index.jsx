import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from './slice/tokenSlice'
import isLoading from './slice/isLoading'
import articles from './slice/articles'
export default configureStore({
  reducer: {
    tokenSlice,
    isLoading,
    articles
	}
})