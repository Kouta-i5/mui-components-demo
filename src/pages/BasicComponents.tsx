import {
    Favorite as FavoriteIcon,
    Home as HomeIcon,
    Star as StarIcon
} from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Stack,
    Typography
} from '@mui/material';

const BasicComponents = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
          基本的なMUIコンポーネント学習
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          基本的なMUIコンポーネントの使い方を学びましょう
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <HomeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  ボタン
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  様々なスタイルとバリエーションのボタンコンポーネント
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                  <Button variant="contained" color="primary">
                    プライマリ
                  </Button>
                  <Button variant="outlined" color="secondary">
                    セカンダリ
                  </Button>
                  <Button variant="text" color="success">
                    テキスト
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <FavoriteIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  タイポグラフィ
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  テキストの表示とスタイリング
                </Typography>
                <Stack spacing={1} alignItems="center">
                  <Typography variant="h6" color="primary">
                    H6 見出し
                  </Typography>
                  <Typography variant="body1">
                    本文テキスト
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    キャプションテキスト
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <StarIcon sx={{ fontSize: 60, color: 'warning.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  カード
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  コンテンツを整理して表示
                </Typography>
                <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
                  <Typography variant="body2">
                    カード内のコンテンツ例
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            学習のポイント
          </Typography>
          <Typography variant="body1" color="text.secondary">
            • コンポーネントの基本プロパティ<br/>
            • テーマとカラーの使い方<br/>
            • レイアウトとスペーシング<br/>
            • レスポンシブデザイン<br/>
            • MUI v7の新しいAPI
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BasicComponents;
