import {
    CloudUpload as CloudUploadIcon,
    Delete as DeleteIcon,
    Send as SendIcon
} from '@mui/icons-material';
import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography
} from '@mui/material';

const ButtonComponents = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
          Button コンポーネント学習
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          MUIのButtonコンポーネントの様々なバリエーションと使い方
        </Typography>

        <Stack spacing={4}>
          {/* 基本的なバリアント */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              基本的なバリアント
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Buttonコンポーネントの3つの主要なバリアント
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
            </Stack>
          </Paper>

          {/* カラーバリエーション */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              カラーバリエーション
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              利用可能なカラーパレット
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained" color="primary">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" color="success">Success</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="info">Info</Button>
            </Stack>
          </Paper>

          {/* サイズバリエーション */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              サイズバリエーション
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              3つのサイズオプション
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
              <Button variant="contained" size="small">Small</Button>
              <Button variant="contained" size="medium">Medium</Button>
              <Button variant="contained" size="large">Large</Button>
            </Stack>
          </Paper>

          {/* アイコン付きボタン */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              アイコン付きボタン
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              アイコンとテキストを組み合わせたボタン
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained" startIcon={<SendIcon />}>
                送信
              </Button>
              <Button variant="outlined" endIcon={<DeleteIcon />}>
                削除
              </Button>
              <Button variant="text" startIcon={<CloudUploadIcon />}>
                アップロード
              </Button>
            </Stack>
          </Paper>

          {/* 無効化状態 */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              無効化状態
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              disabledプロパティを使用した無効化状態
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained" disabled>無効化</Button>
              <Button variant="outlined" disabled>無効化</Button>
              <Button variant="text" disabled>無効化</Button>
            </Stack>
          </Paper>

          {/* ローディング状態 */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              ローディング状態
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              処理中の状態を表現するローディングボタン
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained" disabled>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ 
                    width: 16, 
                    height: 16, 
                    border: '2px solid #fff', 
                    borderTop: '2px solid transparent', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite' 
                  }} />
                  処理中...
                </Box>
              </Button>
            </Stack>
          </Paper>

          {/* 学習のポイント */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              学習のポイント
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              • variant: contained, outlined, textの使い分け<br/>
              • color: テーマカラーの活用方法<br/>
              • size: 適切なサイズの選択<br/>
              • startIcon/endIcon: アイコンの配置<br/>
              • disabled: 無効化状態の管理<br/>
              • アクセシビリティの考慮<br/>
              • MUI v7の新しいAPI
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export default ButtonComponents;
