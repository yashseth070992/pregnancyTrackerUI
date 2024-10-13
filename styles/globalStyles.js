import { StyleSheet } from 'react-native';
import { colors } from './theme'; // Import the theme file

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 50,
    backgroundColor: colors.backgroundLight, // Use background color from theme
  },
  
  // Paper container for wrapping content
  paperContainer: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: colors.backgroundLight, // Paper background
    elevation: 4, // Adds shadow and depth effect
  },
  customHeaderContainer: {
    alignItems: 'center', // Center items horizontally
    marginBottom: 20, // Add space below the header
},
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10, // Space between logo and heading
  },
  headingCentered: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary, // Primary text color from theme
    textAlign: 'center',
  },
  cardHeadingCentered: {
    fontSize: 21,
    fontWeight: 'bold',
    color: colors.textPrimary, // Primary text color from theme
    textAlign: 'center',
  },

  // Header Component Styles
  headerContainer: {
    flexDirection: 'row', // Align icons and content in a row
    justifyContent: 'space-between', // Icons on both sides, content in the center
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.buttonPrimary,
    color:colors.buttonTextPrimary,
    borderRadius: 15,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  
  card: {
    backgroundColor: colors.modalBackground, // White card background
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.shadowColor, // Shadow color from theme
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardList: {
    backgroundColor: colors.backgroundDark, // White card background
    borderRadius: 10,
    padding: 4,
    marginBottom: 4,
    elevation: 2,
  },
  cardListIcon: {
    backgroundColor: colors.textPrimary, // White card background    
  },

  // Text styles
  pregnancyText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  dateRange: {
    fontSize: 16,
    color: colors.accentColor,
    marginTop: 5,
    textAlign: 'center',
  },
  messageText: {
    fontSize: 18,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Center content container
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10, // Padding between icons and text content
  },

  // Styles for the left and right icons
  iconLeft: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRight: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconColor: {
    color: colors.buttonTextPrimary,
  },

  // Typography
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary, // Primary text color from theme
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary, // Primary text color from theme
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: colors.textPrimary, // Secondary text color from theme
    lineHeight: 24,
  },
  smallText: {
    fontSize: 14,
    color: colors.textSecondary, // Secondary text color
  },
  link: {
    fontSize: 16,
    color: colors.textAccent, // Accent color for links
    textDecorationLine: 'underline',
  },
  boldText: {
    fontWeight: 'bold',
    color: colors.textPrimary, // Primary text color
  },

  // Buttons
  buttonPrimary: {
    backgroundColor: colors.buttonPrimary, // Primary button color
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonPrimaryText: {
    color: colors.buttonTextPrimary, // Button text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: colors.buttonSecondary, // Secondary button background
    borderColor: colors.buttonPrimary, // Primary button border color
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonSecondaryText: {
    color: colors.buttonTextSecondary, // Text color for secondary button
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: colors.buttonDisabled, // Disabled button background color
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonDisabledText: {
    color: colors.buttonTextDisabled, // Disabled button text color
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Input Fields
  input: {
    backgroundColor: '#F0F5FA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderPrimary, // Use theme border color
    padding: 12,
    fontSize: 16,
    color: colors.textPrimary, // Primary text color
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: colors.buttonPrimary, // Focused input border color
    shadowColor: colors.shadowColor, // Shadow color from theme
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // New styles for input field with icon
  inputContainer: {
    flexDirection: 'row', // Input and icon in one row
    alignItems: 'center',
    position: 'relative',
  },
  inputWithIcon: {
    flex: 1, // Input takes the full width
    paddingRight: 40, // Ensure there's space for the icon
  },
  icon: {
    position: 'absolute',
    right: 10, // Position the icon inside the input
  },

  // Links and Footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: colors.textSecondary, // Secondary text color for footer
  },
  footerLink: {
    color: colors.textAccent, // Accent color for footer links
    fontSize: 16,
    marginLeft: 5,
    textDecorationLine: 'underline',
  },

  // Modals
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0, // Full-screen modal
  },
  modalContent: {
    backgroundColor: colors.modalBackground, // Modal background color
    borderRadius: 10,
    padding: 20,
    shadowColor: colors.shadowColor, // Modal shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary, // Primary text color for modal header
    marginBottom: 16,
  },

  // Shadows and Elevations
  shadow: {
    shadowColor: colors.shadowColor, // Shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  symptomItem: {
    flexDirection: 'row', // Ensures icon and text are in the same line
    alignItems: 'center', // Align items vertically in the center
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.backgroundDark,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },

  // Icon for each symptom
  symptomIcon: {
color:colors.textPrimary,
    marginRight: 10, // Adds space between icon and text
  },
  deepShadow: {
    shadowColor: colors.shadowColor, // Deeper shadow for elevation
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
});