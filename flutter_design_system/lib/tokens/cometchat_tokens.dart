import 'package:flutter/material.dart';

@immutable
class CometChatTokens extends ThemeExtension<CometChatTokens> {
  const CometChatTokens({
    required this.primaryColor,
    required this.backgroundColor01,
    required this.backgroundColor02,
    required this.backgroundColor03,
    required this.backgroundColor04,
    required this.textColorPrimary,
    required this.textColorSecondary,
    required this.textColorTertiary,
    required this.errorColor,
    required this.successColor,
    required this.borderColorDefault,
    required this.borderColorLight,
    required this.borderColorDark,
    required this.staticWhite,
    required this.staticBlack,
    required this.primaryButtonBackground,
    required this.primaryButtonText,
    this.fontFamily = 'Roboto',
  });

  final Color primaryColor;
  final Color backgroundColor01;
  final Color backgroundColor02;
  final Color backgroundColor03;
  final Color backgroundColor04;
  final Color textColorPrimary;
  final Color textColorSecondary;
  final Color textColorTertiary;
  final Color errorColor;
  final Color successColor;
  final Color borderColorDefault;
  final Color borderColorLight;
  final Color borderColorDark;
  final Color staticWhite;
  final Color staticBlack;
  final Color primaryButtonBackground;
  final Color primaryButtonText;
  final String fontFamily;

  static const double spacing = 2.0;
  static const double spacing1 = 4.0;
  static const double spacing2 = 8.0;
  static const double spacing3 = 12.0;
  static const double spacing4 = 16.0;
  static const double spacing5 = 20.0;
  static const double spacing6 = 24.0;

  static const double radius1 = 4.0;
  static const double radius2 = 8.0;
  static const double radius3 = 12.0;
  static const double radius4 = 16.0;
  static const double radius5 = 20.0;
  static const double radiusMax = 1000.0;

  // ─── Shadows ───
  static const List<BoxShadow> shadowLg = [
    BoxShadow(color: Color(0x140A0D12), blurRadius: 16, offset: Offset(0, 12), spreadRadius: -4),
    BoxShadow(color: Color(0x080A0D12), blurRadius: 6, offset: Offset(0, 4), spreadRadius: -2),
  ];

  factory CometChatTokens.light() => const CometChatTokens(
        primaryColor: Color(0xFF6852D6),
        backgroundColor01: Color(0xFFFFFFFF),
        backgroundColor02: Color(0xFFFAFAFA),
        backgroundColor03: Color(0xFFF5F5F5),
        backgroundColor04: Color(0xFFE5E5E5),
        textColorPrimary: Color(0xFF141414),
        textColorSecondary: Color(0xFF727272),
        textColorTertiary: Color(0xFFA1A1A1),
        errorColor: Color(0xFFF97066),
        successColor: Color(0xFF17B26A),
        borderColorDefault: Color(0xFFE5E5E5),
        borderColorLight: Color(0xFFF5F5F5),
        borderColorDark: Color(0xFFD4D4D4),
        staticWhite: Color(0xFFFFFFFF),
        staticBlack: Color(0xFF141414),
        primaryButtonBackground: Color(0xFF6852D6),
        primaryButtonText: Color(0xFFFFFFFF),
      );

  @override
  CometChatTokens copyWith({
    Color? primaryColor,
    Color? backgroundColor01,
    Color? backgroundColor02,
    Color? backgroundColor03,
    Color? backgroundColor04,
    Color? textColorPrimary,
    Color? textColorSecondary,
    Color? textColorTertiary,
    Color? errorColor,
    Color? successColor,
    Color? borderColorDefault,
    Color? borderColorLight,
    Color? borderColorDark,
    Color? staticWhite,
    Color? staticBlack,
    Color? primaryButtonBackground,
    Color? primaryButtonText,
    String? fontFamily,
  }) {
    return CometChatTokens(
      primaryColor: primaryColor ?? this.primaryColor,
      backgroundColor01: backgroundColor01 ?? this.backgroundColor01,
      backgroundColor02: backgroundColor02 ?? this.backgroundColor02,
      backgroundColor03: backgroundColor03 ?? this.backgroundColor03,
      backgroundColor04: backgroundColor04 ?? this.backgroundColor04,
      textColorPrimary: textColorPrimary ?? this.textColorPrimary,
      textColorSecondary: textColorSecondary ?? this.textColorSecondary,
      textColorTertiary: textColorTertiary ?? this.textColorTertiary,
      errorColor: errorColor ?? this.errorColor,
      successColor: successColor ?? this.successColor,
      borderColorDefault: borderColorDefault ?? this.borderColorDefault,
      borderColorLight: borderColorLight ?? this.borderColorLight,
      borderColorDark: borderColorDark ?? this.borderColorDark,
      staticWhite: staticWhite ?? this.staticWhite,
      staticBlack: staticBlack ?? this.staticBlack,
      primaryButtonBackground: primaryButtonBackground ?? this.primaryButtonBackground,
      primaryButtonText: primaryButtonText ?? this.primaryButtonText,
      fontFamily: fontFamily ?? this.fontFamily,
    );
  }

  @override
  CometChatTokens lerp(ThemeExtension<CometChatTokens>? other, double t) {
    if (other is! CometChatTokens) return this;
    return CometChatTokens(
      primaryColor: Color.lerp(primaryColor, other.primaryColor, t)!,
      backgroundColor01: Color.lerp(backgroundColor01, other.backgroundColor01, t)!,
      backgroundColor02: Color.lerp(backgroundColor02, other.backgroundColor02, t)!,
      backgroundColor03: Color.lerp(backgroundColor03, other.backgroundColor03, t)!,
      backgroundColor04: Color.lerp(backgroundColor04, other.backgroundColor04, t)!,
      textColorPrimary: Color.lerp(textColorPrimary, other.textColorPrimary, t)!,
      textColorSecondary: Color.lerp(textColorSecondary, other.textColorSecondary, t)!,
      textColorTertiary: Color.lerp(textColorTertiary, other.textColorTertiary, t)!,
      errorColor: Color.lerp(errorColor, other.errorColor, t)!,
      successColor: Color.lerp(successColor, other.successColor, t)!,
      borderColorDefault: Color.lerp(borderColorDefault, other.borderColorDefault, t)!,
      borderColorLight: Color.lerp(borderColorLight, other.borderColorLight, t)!,
      borderColorDark: Color.lerp(borderColorDark, other.borderColorDark, t)!,
      staticWhite: Color.lerp(staticWhite, other.staticWhite, t)!,
      staticBlack: Color.lerp(staticBlack, other.staticBlack, t)!,
      primaryButtonBackground: Color.lerp(primaryButtonBackground, other.primaryButtonBackground, t)!,
      primaryButtonText: Color.lerp(primaryButtonText, other.primaryButtonText, t)!,
      fontFamily: t < 0.5 ? fontFamily : other.fontFamily,
    );
  }
}
