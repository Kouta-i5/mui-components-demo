import {
    Box,
    Container,
    Paper,
    Stack,
    Typography
} from '@mui/material';

const TypographyComponents = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
          Typography コンポーネント学習
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          MUIのTypographyコンポーネントの様々なバリエーションと使い方
        </Typography>

        <Stack spacing={4}>
          {/* 見出しバリエーション */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              見出しバリエーション
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              h1からh6までの見出しスタイル
            </Typography>
            <Stack spacing={2}>
              <Typography variant="h1" component="h1">Heading 1 (h1)</Typography>
              <Typography variant="h2" component="h2">Heading 2 (h2)</Typography>
              <Typography variant="h3" component="h3">Heading 3 (h3)</Typography>
              <Typography variant="h4" component="h4">Heading 4 (h4)</Typography>
              <Typography variant="h5" component="h5">Heading 5 (h5)</Typography>
              <Typography variant="h6" component="h6">Heading 6 (h6)</Typography>
            </Stack>
          </Paper>

          {/* 本文テキスト */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              本文テキスト
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              一般的なテキスト表示用のバリアント
            </Typography>
            <Stack spacing={2}>
              <Typography variant="body1">
                これはbody1のテキストです。一般的な本文として使用され、読みやすいサイズと行間を持っています。
              </Typography>
              <Typography variant="body2">
                これはbody2のテキストです。body1より少し小さく、補足情報や注釈などに適しています。
              </Typography>
            </Stack>
          </Paper>

          {/* 特殊テキスト */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              特殊テキスト
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              特定の用途に特化したテキストスタイル
            </Typography>
            <Stack spacing={2}>
              <Typography variant="subtitle1">
                これはsubtitle1です。見出しと本文の間に位置するスタイルです。
              </Typography>
              <Typography variant="subtitle2">
                これはsubtitle2です。subtitle1より小さく、補助的な見出しに使用します。
              </Typography>
              <Typography variant="caption">
                これはcaptionです。図表の説明や注釈など、小さなテキストに使用します。
              </Typography>
              <Typography variant="overline">
                これはoverlineです。大文字で表示され、セクションの開始を示すのに使用します。
              </Typography>
            </Stack>
          </Paper>

          {/* カラーバリエーション */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              カラーバリエーション
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              テキストに適用できる様々なカラー
            </Typography>
            <Stack spacing={2}>
              <Typography variant="h6" color="primary">Primary Color</Typography>
              <Typography variant="h6" color="secondary">Secondary Color</Typography>
              <Typography variant="h6" color="success">Success Color</Typography>
              <Typography variant="h6" color="error">Error Color</Typography>
              <Typography variant="h6" color="warning">Warning Color</Typography>
              <Typography variant="h6" color="info">Info Color</Typography>
              <Typography variant="h6" color="text.primary">Text Primary</Typography>
              <Typography variant="h6" color="text.secondary">Text Secondary</Typography>
            </Stack>
          </Paper>

          {/* 配置とスタイル */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              配置とスタイル
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              テキストの配置とスタイリングオプション
            </Typography>
            <Stack spacing={2}>
              <Typography variant="h6" align="left">左揃えのテキスト</Typography>
              <Typography variant="h6" align="center">中央揃えのテキスト</Typography>
              <Typography variant="h6" align="right">右揃えのテキスト</Typography>
              <Typography variant="h6" align="justify">
                両端揃えのテキスト。長い文章を均等に配置する際に使用します。
              </Typography>
            </Stack>
          </Paper>

          {/* 装飾とスタイル */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              装飾とスタイル
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              テキストの装飾とスタイリング
            </Typography>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>太字テキスト</Typography>
              <Typography variant="h6" sx={{ fontStyle: 'italic' }}>斜体テキスト</Typography>
              <Typography variant="h6" sx={{ textDecoration: 'underline' }}>下線付きテキスト</Typography>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>大文字変換</Typography>
              <Typography variant="h6" sx={{ letterSpacing: 2 }}>文字間隔を広げたテキスト</Typography>
            </Stack>
          </Paper>

          {/* 学習のポイント */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              学習のポイント
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              • variant: 適切なテキストスタイルの選択<br/>
              • component: セマンティックなHTML要素の指定<br/>
              • color: テーマカラーの活用<br/>
              • align: テキストの配置制御<br/>
              • gutterBottom: 下マージンの自動追加<br/>
              • sx: カスタムスタイリング<br/>
              • アクセシビリティとSEOの考慮<br/>
              • MUI v7の新しいAPI
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export default TypographyComponents;
