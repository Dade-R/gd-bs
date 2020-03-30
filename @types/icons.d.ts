
// Renders an icon by type
export const Icons: (iconType:number, height?:number, width?:number) => HTMLElement;

// Icon Types
export const IconTypes: {
	// alarm-fill.svg
	AlarmFill: number;
	// alarm.svg
	Alarm: number;
	// alert-circle-fill.svg
	AlertCircleFill: number;
	// alert-circle.svg
	AlertCircle: number;
	// alert-octagon-fill.svg
	AlertOctagonFill: number;
	// alert-octagon.svg
	AlertOctagon: number;
	// alert-square-fill.svg
	AlertSquareFill: number;
	// alert-square.svg
	AlertSquare: number;
	// alert-triangle-fill.svg
	AlertTriangleFill: number;
	// alert-triangle.svg
	AlertTriangle: number;
	// archive-fill.svg
	ArchiveFill: number;
	// archive.svg
	Archive: number;
	// arrow-bar-bottom.svg
	ArrowBarBottom: number;
	// arrow-bar-left.svg
	ArrowBarLeft: number;
	// arrow-bar-right.svg
	ArrowBarRight: number;
	// arrow-bar-up.svg
	ArrowBarUp: number;
	// arrow-clockwise.svg
	ArrowClockwise: number;
	// arrow-counterclockwise.svg
	ArrowCounterclockwise: number;
	// arrow-down-left.svg
	ArrowDownLeft: number;
	// arrow-down-right.svg
	ArrowDownRight: number;
	// arrow-down-short.svg
	ArrowDownShort: number;
	// arrow-down.svg
	ArrowDown: number;
	// arrow-left-right.svg
	ArrowLeftRight: number;
	// arrow-left-short.svg
	ArrowLeftShort: number;
	// arrow-left.svg
	ArrowLeft: number;
	// arrow-repeat.svg
	ArrowRepeat: number;
	// arrow-right-short.svg
	ArrowRightShort: number;
	// arrow-right.svg
	ArrowRight: number;
	// arrow-up-down.svg
	ArrowUpDown: number;
	// arrow-up-left.svg
	ArrowUpLeft: number;
	// arrow-up-right.svg
	ArrowUpRight: number;
	// arrow-up-short.svg
	ArrowUpShort: number;
	// arrow-up.svg
	ArrowUp: number;
	// arrows-angle-contract.svg
	ArrowsAngleContract: number;
	// arrows-angle-expand.svg
	ArrowsAngleExpand: number;
	// arrows-collapse.svg
	ArrowsCollapse: number;
	// arrows-expand.svg
	ArrowsExpand: number;
	// arrows-fullscreen.svg
	ArrowsFullscreen: number;
	// at.svg
	At: number;
	// award.svg
	Award: number;
	// backspace-fill.svg
	BackspaceFill: number;
	// backspace-reverse-fill.svg
	BackspaceReverseFill: number;
	// backspace-reverse.svg
	BackspaceReverse: number;
	// backspace.svg
	Backspace: number;
	// bar-chart-fill.svg
	BarChartFill: number;
	// bar-chart.svg
	BarChart: number;
	// battery-charging.svg
	BatteryCharging: number;
	// battery-full.svg
	BatteryFull: number;
	// battery.svg
	Battery: number;
	// bell-fill.svg
	BellFill: number;
	// bell.svg
	Bell: number;
	// blockquote-left.svg
	BlockquoteLeft: number;
	// blockquote-right.svg
	BlockquoteRight: number;
	// book-half-fill.svg
	BookHalfFill: number;
	// book.svg
	Book: number;
	// bookmark-fill.svg
	BookmarkFill: number;
	// bookmark.svg
	Bookmark: number;
	// bootstrap-fill.svg
	BootstrapFill: number;
	// bootstrap-reboot.svg
	BootstrapReboot: number;
	// bootstrap.svg
	Bootstrap: number;
	// box-arrow-bottom-left.svg
	BoxArrowBottomLeft: number;
	// box-arrow-bottom-right.svg
	BoxArrowBottomRight: number;
	// box-arrow-down.svg
	BoxArrowDown: number;
	// box-arrow-left.svg
	BoxArrowLeft: number;
	// box-arrow-right.svg
	BoxArrowRight: number;
	// box-arrow-up-left.svg
	BoxArrowUpLeft: number;
	// box-arrow-up-right.svg
	BoxArrowUpRight: number;
	// box-arrow-up.svg
	BoxArrowUp: number;
	// braces.svg
	Braces: number;
	// brightness-fill-high.svg
	BrightnessFillHigh: number;
	// brightness-fill-low.svg
	BrightnessFillLow: number;
	// brightness-high.svg
	BrightnessHigh: number;
	// brightness-low.svg
	BrightnessLow: number;
	// brush.svg
	Brush: number;
	// bucket-fill.svg
	BucketFill: number;
	// bucket.svg
	Bucket: number;
	// building.svg
	Building: number;
	// bullseye.svg
	Bullseye: number;
	// calendar-fill.svg
	CalendarFill: number;
	// calendar.svg
	Calendar: number;
	// camera-video-fill.svg
	CameraVideoFill: number;
	// camera-video.svg
	CameraVideo: number;
	// camera.svg
	Camera: number;
	// capslock-fill.svg
	CapslockFill: number;
	// capslock.svg
	Capslock: number;
	// chat-fill.svg
	ChatFill: number;
	// chat.svg
	Chat: number;
	// check-box.svg
	CheckBox: number;
	// check-circle.svg
	CheckCircle: number;
	// check.svg
	Check: number;
	// chevron-compact-down.svg
	ChevronCompactDown: number;
	// chevron-compact-left.svg
	ChevronCompactLeft: number;
	// chevron-compact-right.svg
	ChevronCompactRight: number;
	// chevron-compact-up.svg
	ChevronCompactUp: number;
	// chevron-down.svg
	ChevronDown: number;
	// chevron-left.svg
	ChevronLeft: number;
	// chevron-right.svg
	ChevronRight: number;
	// chevron-up.svg
	ChevronUp: number;
	// circle-fill.svg
	CircleFill: number;
	// circle-half.svg
	CircleHalf: number;
	// circle-slash.svg
	CircleSlash: number;
	// circle.svg
	Circle: number;
	// clock-fill.svg
	ClockFill: number;
	// clock.svg
	Clock: number;
	// cloud-download.svg
	CloudDownload: number;
	// cloud-fill.svg
	CloudFill: number;
	// cloud-upload.svg
	CloudUpload: number;
	// cloud.svg
	Cloud: number;
	// code-slash.svg
	CodeSlash: number;
	// code.svg
	Code: number;
	// columns-gutters.svg
	ColumnsGutters: number;
	// columns.svg
	Columns: number;
	// command.svg
	Command: number;
	// compass.svg
	Compass: number;
	// cone-striped.svg
	ConeStriped: number;
	// cone.svg
	Cone: number;
	// controller.svg
	Controller: number;
	// credit-card.svg
	CreditCard: number;
	// cursor-fill.svg
	CursorFill: number;
	// cursor.svg
	Cursor: number;
	// dash.svg
	Dash: number;
	// diamond-half.svg
	DiamondHalf: number;
	// diamond.svg
	Diamond: number;
	// display-fill.svg
	DisplayFill: number;
	// display.svg
	Display: number;
	// document-code.svg
	DocumentCode: number;
	// document-diff.svg
	DocumentDiff: number;
	// document-richtext.svg
	DocumentRichtext: number;
	// document-spreadsheet.svg
	DocumentSpreadsheet: number;
	// document-text.svg
	DocumentText: number;
	// document.svg
	Document: number;
	// documents-alt.svg
	DocumentsAlt: number;
	// documents.svg
	Documents: number;
	// dot.svg
	Dot: number;
	// download.svg
	Download: number;
	// egg-fried.svg
	EggFried: number;
	// eject-fill.svg
	EjectFill: number;
	// eject.svg
	Eject: number;
	// envelope-fill.svg
	EnvelopeFill: number;
	// envelope-open-fill.svg
	EnvelopeOpenFill: number;
	// envelope-open.svg
	EnvelopeOpen: number;
	// envelope.svg
	Envelope: number;
	// eye-fill.svg
	EyeFill: number;
	// eye-slash-fill.svg
	EyeSlashFill: number;
	// eye-slash.svg
	EyeSlash: number;
	// eye.svg
	Eye: number;
	// filter.svg
	Filter: number;
	// flag-fill.svg
	FlagFill: number;
	// flag.svg
	Flag: number;
	// folder-fill.svg
	FolderFill: number;
	// folder-symlink-fill.svg
	FolderSymlinkFill: number;
	// folder-symlink.svg
	FolderSymlink: number;
	// folder.svg
	Folder: number;
	// fonts.svg
	Fonts: number;
	// forward-fill.svg
	ForwardFill: number;
	// forward.svg
	Forward: number;
	// gear-fill.svg
	GearFill: number;
	// gear-wide-connected.svg
	GearWideConnected: number;
	// gear-wide.svg
	GearWide: number;
	// gear.svg
	Gear: number;
	// geo.svg
	Geo: number;
	// graph-down.svg
	GraphDown: number;
	// graph-up.svg
	GraphUp: number;
	// grid-fill.svg
	GridFill: number;
	// grid.svg
	Grid: number;
	// hammer.svg
	Hammer: number;
	// hash.svg
	Hash: number;
	// heart-fill.svg
	HeartFill: number;
	// heart.svg
	Heart: number;
	// house-fill.svg
	HouseFill: number;
	// house.svg
	House: number;
	// image-alt.svg
	ImageAlt: number;
	// image-fill.svg
	ImageFill: number;
	// image.svg
	Image: number;
	// images.svg
	Images: number;
	// inbox-fill.svg
	InboxFill: number;
	// inbox.svg
	Inbox: number;
	// inboxes-fill.svg
	InboxesFill: number;
	// inboxes.svg
	Inboxes: number;
	// info-fill.svg
	InfoFill: number;
	// info-square-fill.svg
	InfoSquareFill: number;
	// info-square.svg
	InfoSquare: number;
	// info.svg
	Info: number;
	// justify-left.svg
	JustifyLeft: number;
	// justify-right.svg
	JustifyRight: number;
	// justify.svg
	Justify: number;
	// kanban-fill.svg
	KanbanFill: number;
	// kanban.svg
	Kanban: number;
	// laptop.svg
	Laptop: number;
	// layout-sidebar-reverse.svg
	LayoutSidebarReverse: number;
	// layout-sidebar.svg
	LayoutSidebar: number;
	// layout-split.svg
	LayoutSplit: number;
	// list-check.svg
	ListCheck: number;
	// list-ol.svg
	ListOl: number;
	// list-task.svg
	ListTask: number;
	// list-ul.svg
	ListUl: number;
	// list.svg
	List: number;
	// lock-fill.svg
	LockFill: number;
	// lock.svg
	Lock: number;
	// map.svg
	Map: number;
	// mic.svg
	Mic: number;
	// moon.svg
	Moon: number;
	// music-player-fill.svg
	MusicPlayerFill: number;
	// music-player.svg
	MusicPlayer: number;
	// option.svg
	Option: number;
	// outlet.svg
	Outlet: number;
	// pause-fill.svg
	PauseFill: number;
	// pause.svg
	Pause: number;
	// pen.svg
	Pen: number;
	// pencil.svg
	Pencil: number;
	// people-fill.svg
	PeopleFill: number;
	// people.svg
	People: number;
	// person-fill.svg
	PersonFill: number;
	// person.svg
	Person: number;
	// phone-landscape.svg
	PhoneLandscape: number;
	// phone.svg
	Phone: number;
	// pie-chart-fill.svg
	PieChartFill: number;
	// pie-chart.svg
	PieChart: number;
	// play-fill.svg
	PlayFill: number;
	// play.svg
	Play: number;
	// plug.svg
	Plug: number;
	// plus.svg
	Plus: number;
	// power.svg
	Power: number;
	// question-fill.svg
	QuestionFill: number;
	// question-square-fill.svg
	QuestionSquareFill: number;
	// question-square.svg
	QuestionSquare: number;
	// question.svg
	Question: number;
	// reply-all-fill.svg
	ReplyAllFill: number;
	// reply-all.svg
	ReplyAll: number;
	// reply-fill.svg
	ReplyFill: number;
	// reply.svg
	Reply: number;
	// screwdriver.svg
	Screwdriver: number;
	// search.svg
	Search: number;
	// shield-fill.svg
	ShieldFill: number;
	// shield-lock-fill.svg
	ShieldLockFill: number;
	// shield-lock.svg
	ShieldLock: number;
	// shield-shaded.svg
	ShieldShaded: number;
	// shield.svg
	Shield: number;
	// shift-fill.svg
	ShiftFill: number;
	// shift.svg
	Shift: number;
	// skip-backward-fill.svg
	SkipBackwardFill: number;
	// skip-backward.svg
	SkipBackward: number;
	// skip-end-fill.svg
	SkipEndFill: number;
	// skip-end.svg
	SkipEnd: number;
	// skip-forward-fill.svg
	SkipForwardFill: number;
	// skip-forward.svg
	SkipForward: number;
	// skip-start-fill.svg
	SkipStartFill: number;
	// skip-start.svg
	SkipStart: number;
	// speaker.svg
	Speaker: number;
	// square-fill.svg
	SquareFill: number;
	// square-half.svg
	SquareHalf: number;
	// square.svg
	Square: number;
	// star-fill.svg
	StarFill: number;
	// star-half.svg
	StarHalf: number;
	// star.svg
	Star: number;
	// stop-fill.svg
	StopFill: number;
	// stop.svg
	Stop: number;
	// stopwatch-fill.svg
	StopwatchFill: number;
	// stopwatch.svg
	Stopwatch: number;
	// sun.svg
	Sun: number;
	// table.svg
	Table: number;
	// tablet-landscape.svg
	TabletLandscape: number;
	// tablet.svg
	Tablet: number;
	// tag-fill.svg
	TagFill: number;
	// tag.svg
	Tag: number;
	// terminal-fill.svg
	TerminalFill: number;
	// terminal.svg
	Terminal: number;
	// text-center.svg
	TextCenter: number;
	// text-indent-left.svg
	TextIndentLeft: number;
	// text-indent-right.svg
	TextIndentRight: number;
	// text-left.svg
	TextLeft: number;
	// text-right.svg
	TextRight: number;
	// three-dots-vertical.svg
	ThreeDotsVertical: number;
	// three-dots.svg
	ThreeDots: number;
	// toggle-off.svg
	ToggleOff: number;
	// toggle-on.svg
	ToggleOn: number;
	// toggles.svg
	Toggles: number;
	// tools.svg
	Tools: number;
	// trash-fill.svg
	TrashFill: number;
	// trash.svg
	Trash: number;
	// triangle-fill.svg
	TriangleFill: number;
	// triangle-half.svg
	TriangleHalf: number;
	// triangle.svg
	Triangle: number;
	// trophy.svg
	Trophy: number;
	// tv-fill.svg
	TvFill: number;
	// tv.svg
	Tv: number;
	// type-bold.svg
	TypeBold: number;
	// type-h1.svg
	TypeH1: number;
	// type-h2.svg
	TypeH2: number;
	// type-h3.svg
	TypeH3: number;
	// type-italic.svg
	TypeItalic: number;
	// type-strikethrough.svg
	TypeStrikethrough: number;
	// type-underline.svg
	TypeUnderline: number;
	// type.svg
	Type: number;
	// unlock-fill.svg
	UnlockFill: number;
	// unlock.svg
	Unlock: number;
	// upload.svg
	Upload: number;
	// volume-down-fill.svg
	VolumeDownFill: number;
	// volume-down.svg
	VolumeDown: number;
	// volume-mute-fill.svg
	VolumeMuteFill: number;
	// volume-mute.svg
	VolumeMute: number;
	// volume-up-fill.svg
	VolumeUpFill: number;
	// volume-up.svg
	VolumeUp: number;
	// wallet.svg
	Wallet: number;
	// watch.svg
	Watch: number;
	// wifi.svg
	Wifi: number;
	// window.svg
	Window: number;
	// wrench.svg
	Wrench: number;
	// x-circle-fill.svg
	XCircleFill: number;
	// x-circle.svg
	XCircle: number;
	// x-octagon-fill.svg
	XOctagonFill: number;
	// x-octagon.svg
	XOctagon: number;
	// x-square-fill.svg
	XSquareFill: number;
	// x-square.svg
	XSquare: number;
	// x.svg
	X: number;
}