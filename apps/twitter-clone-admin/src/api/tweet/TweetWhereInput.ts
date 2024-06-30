import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TweetWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
};
