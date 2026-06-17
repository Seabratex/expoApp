diff --git a/C:\Users\seabra\Documents\Codex\2026-06-17\files-mentioned-by-the-user-conteudo1\work\expoApp\app\(tabs)\_layout.tsx b/C:\Users\seabra\Documents\Codex\2026-06-17\files-mentioned-by-the-user-conteudo1\work\expoApp\app\(tabs)\_layout.tsx
--- a/C:\Users\seabra\Documents\Codex\2026-06-17\files-mentioned-by-the-user-conteudo1\work\expoApp\app\(tabs)\_layout.tsx
+++ b/C:\Users\seabra\Documents\Codex\2026-06-17\files-mentioned-by-the-user-conteudo1\work\expoApp\app\(tabs)\_layout.tsx
@@ -65,27 +65,23 @@
 
-      {/* Aba "Usuários" — aponta para o arquivo app/(tabs)/usuarios.tsx */}
-      <Tabs.Screen
-        name="usuarios"
-        options={{
-          title: 'Usuários',
-          tabBarIcon: ({ color }) => (
-            // Ícone de grupo de pessoas
-            <IconSymbol size={28} name="person.3.fill" color={color} />
-          ),
-        }}
-      />
-
-      {/* Aba "Produtos" — aponta para o arquivo app/(tabs)/produtos.tsx
-          Essa aba é o ponto de entrada do módulo de Persistência de Dados
-          A tela de cadastro (novoProduto.tsx) é acessada por navegação de pilha */}
-      <Tabs.Screen
-        name="produtos"
-        options={{
-          title: 'Produtos',
-          tabBarIcon: ({ color }) => (
-            // Ícone de caixa/arquivo — representa produtos cadastrados
-            <IconSymbol size={28} name="archivebox.fill" color={color} />
-          ),
-        }}
-      />
+      {/* Aba "Equipe" — aponta para o arquivo app/(tabs)/usuarios.tsx */}
+      <Tabs.Screen
+        name="usuarios"
+        options={{
+          title: 'Equipe',
+          tabBarIcon: ({ color }) => (
+            <IconSymbol size={28} name="person.3.fill" color={color} />
+          ),
+        }}
+      />
+
+      {/* Aba "Controles" — ponto de entrada do módulo de persistência ISO/IEC */}
+      <Tabs.Screen
+        name="controles"
+        options={{
+          title: 'Controles',
+          tabBarIcon: ({ color }) => (
+            <IconSymbol size={28} name="checkmark.shield.fill" color={color} />
+          ),
+        }}
+      />
 
