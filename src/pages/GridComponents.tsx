import {
    Box,
    Container,
    Grid,
    Paper,
    Stack,
    Typography
} from '@mui/material';

const GridComponents = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
          Grid コンポーネント学習
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          MUIのGridコンポーネントのレイアウトシステムとレスポンシブデザイン
        </Typography>

        <Stack spacing={4}>
          {/* 基本的なグリッドシステム */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              基本的なグリッドシステム
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              12カラムのグリッドシステムを使用した基本的なレイアウト
            </Typography>
            <Grid container spacing={2}>
              <Grid size={12}>
                <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                  size=12 (フル幅)
                </Box>
              </Grid>
              <Grid size={6}>
                <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                  size=6 (半分の幅)
                </Box>
              </Grid>
              <Grid size={6}>
                <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                  size=6 (半分の幅)
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'success.main', color: 'white', textAlign: 'center' }}>
                  size=4 (1/3の幅)
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'success.main', color: 'white', textAlign: 'center' }}>
                  size=4 (1/3の幅)
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'success.main', color: 'white', textAlign: 'center' }}>
                  size=4 (1/3の幅)
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* レスポンシブブレークポイント */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              レスポンシブブレークポイント
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              異なる画面サイズでの表示を制御するブレークポイント
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Box sx={{ p: 2, bgcolor: 'info.main', color: 'white', textAlign: 'center' }}>
                  xs=12 sm=6 md=4 lg=3
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Box sx={{ p: 2, bgcolor: 'info.main', color: 'white', textAlign: 'center' }}>
                  xs=12 sm=6 md=4 lg=3
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Box sx={{ p: 2, bgcolor: 'info.main', color: 'white', textAlign: 'center' }}>
                  xs=12 sm=6 md=4 lg=3
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Box sx={{ p: 2, bgcolor: 'info.main', color: 'white', textAlign: 'center' }}>
                  xs=12 sm=6 md=4 lg=3
                </Box>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              • xs: 0px以上 (モバイル)<br/>
              • sm: 600px以上 (タブレット)<br/>
              • md: 900px以上 (デスクトップ)<br/>
              • lg: 1200px以上 (大画面)<br/>
              • xl: 1536px以上 (超大画面)
            </Typography>
          </Paper>

          {/* ネストしたグリッド */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              ネストしたグリッド
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              グリッド内にさらにグリッドを配置するネスト構造
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 2, bgcolor: 'warning.main', color: 'white' }}>
                  左側のコンテナ
                  <Grid container spacing={1} sx={{ mt: 1 }}>
                    <Grid size={6}>
                      <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
                        ネスト1
                      </Box>
                    </Grid>
                    <Grid size={6}>
                      <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
                        ネスト2
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 2, bgcolor: 'error.main', color: 'white' }}>
                  右側のコンテナ
                  <Grid container spacing={1} sx={{ mt: 1 }}>
                    <Grid size={4}>
                      <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
                        ネスト1
                      </Box>
                    </Grid>
                    <Grid size={4}>
                      <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
                        ネスト2
                      </Box>
                    </Grid>
                    <Grid size={4}>
                      <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
                        ネスト3
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* スペーシングとギャップ */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              スペーシングとギャップ
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              グリッドアイテム間の間隔を制御するspacingプロパティ
            </Typography>
            <Grid container spacing={1} sx={{ mb: 3 }}>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'primary.light', textAlign: 'center' }}>
                  spacing=1
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'primary.light', textAlign: 'center' }}>
                  spacing=1
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'primary.light', textAlign: 'center' }}>
                  spacing=1
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'secondary.light', textAlign: 'center' }}>
                  spacing=3
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'secondary.light', textAlign: 'center' }}>
                  spacing=3
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'secondary.light', textAlign: 'center' }}>
                  spacing=3
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'success.light', textAlign: 'center' }}>
                  spacing=6
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'success.light', textAlign: 'center' }}>
                  spacing=6
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'success.light', textAlign: 'center' }}>
                  spacing=6
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* 配置とアライメント */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              配置とアライメント
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              グリッドコンテナとアイテムの配置を制御
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'info.light', textAlign: 'center' }}>
                  justifyContent="center"
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'info.light', textAlign: 'center' }}>
                  justifyContent="center"
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'warning.light', textAlign: 'center' }}>
                  justifyContent="space-between"
                </Box>
              </Grid>
              <Grid size={4}>
                <Box sx={{ p: 2, bgcolor: 'warning.light', textAlign: 'center' }}>
                  justifyContent="space-between"
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* 学習のポイント */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              学習のポイント
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              • container: グリッドコンテナの指定<br/>
              • size: ブレークポイントごとのカラム数（MUI v7の新プロパティ）<br/>
              • spacing: アイテム間の間隔制御<br/>
              • justifyContent: 水平方向の配置制御<br/>
              • alignItems: 垂直方向の配置制御<br/>
              • レスポンシブデザインの実装<br/>
              • ネストしたグリッドの活用<br/>
              • CSS Flexboxベースのレイアウトシステム
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export default GridComponents;
