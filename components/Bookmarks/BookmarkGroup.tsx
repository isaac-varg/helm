import type { IconType } from "react-icons";
import Bookmark from "./Bookmark";
import type { BookmarkProps } from "./Bookmark";

export interface BookmarkGroupProps {
  title: string;
  icon?: IconType;
  bookmarks: BookmarkProps[];
}

const BookmarkGroup = ({ title, icon: Icon, bookmarks }: BookmarkGroupProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-white/50">
        {Icon && <Icon className="w-4 h-4" />}
        <h3 className="text-xs font-semibold uppercase tracking-wider">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.href} {...bookmark} />
        ))}
      </div>
    </div>
  );
};

export default BookmarkGroup;
