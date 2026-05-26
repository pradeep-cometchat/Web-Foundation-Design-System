import 'package:flutter/material.dart';
import 'tokens/cometchat_tokens.dart';
import 'app/design_system_app.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CometChat Flutter Design System',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        fontFamily: 'Roboto',
        extensions: [CometChatTokens.light()],
      ),
      home: const DesignSystemApp(),
    );
  }
}
