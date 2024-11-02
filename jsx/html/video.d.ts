// Solid - https://www.solidjs.com/
interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	height?: number | string
	playsinline?: boolean
	poster?: string
	width?: number | string
	disablepictureinpicture?: boolean
}

// Voby - https://github.com/vobyjs/voby
interface VideoHTMLAttributes<T extends EventTarget> extends MediaHTMLAttributes<T> {
	height?: number | string
	playsInline?: boolean
	poster?: string
	width?: number | string
	disablePictureInPicture?: boolean
	disableRemotePlayback?: boolean
}

// Vue - https://vuejs.org/
interface VideoHTMLAttributes extends MediaHTMLAttributes {
	height?: number | string
	playsinline?: boolean | 'true' | 'false'
	poster?: string
	width?: number | string
	disablePictureInPicture?: boolean | 'true' | 'false'
	disableRemotePlayback?: boolean | 'true' | 'false'
}

// React - https://react.dev/
interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	height?: number | string
	playsInline?: boolean
	poster?: string
	width?: number | string
	disablePictureInPicture?: boolean
	disableRemotePlayback?: boolean
}
