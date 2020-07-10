import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#CCC'
	},
	header: {
		marginTop: '15%',
		fontSize: 20,
		color: 'red',
		paddingBottom: 10
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		borderColor: 'black',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingBottom: 10
	},
	textInput: {
		flex: 1,
		height: 20,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		paddingLeft: 10,
		minHeight: '3%'
	},
	textBold: {
		fontWeight: 'bold',
		color: 'rgba(255,255,255,.6)'
	},
	img: { width: 25, height: 25, resizeMode: 'center' },
	row: { height: 55, paddingHorizontal: 10, borderBottomWidth: 1, borderColor: colors.global.whiteRgb(.5), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
	rowLast: { height: 55, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
	boxMetrica: { flex: 1, height: 220, borderRadius: 8, elevation: 1, marginBottom: 20, backgroundColor: colors.global.whiteRgb(.5) },
	bold: { fontWeight: 'bold' },
	colRight: { flexDirection: 'row', justifyContent: 'space-between', width: 50, alignItems: 'center' }
})

export default styles