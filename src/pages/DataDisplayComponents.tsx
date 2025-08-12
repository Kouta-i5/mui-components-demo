import {
    Email as EmailIcon,
    ExpandMore as ExpandMoreIcon,
    Person as PersonIcon,
    Star as StarIcon,
    TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Badge,
    Box,
    Chip,
    Container,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

const DataDisplayComponents = () => {
  // サンプルデータ
  const users = [
    { id: 1, name: '田中太郎', email: 'tanaka@example.com', role: '開発者', status: 'アクティブ' },
    { id: 2, name: '佐藤花子', email: 'sato@example.com', role: 'デザイナー', status: 'アクティブ' },
    { id: 3, name: '鈴木一郎', email: 'suzuki@example.com', role: 'PM', status: '非アクティブ' },
    { id: 4, name: '高橋美咲', email: 'takahashi@example.com', role: '開発者', status: 'アクティブ' }
  ];

  const notifications = [
    { id: 1, message: '新しいプロジェクトが作成されました', type: 'info', time: '2時間前' },
    { id: 2, message: 'コードレビューのリクエストがあります', type: 'warning', time: '4時間前' },
    { id: 3, message: 'デプロイが完了しました', type: 'success', time: '6時間前' },
    { id: 4, message: 'エラーが発生しています', type: 'error', time: '1日前' }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
          データ表示コンポーネント学習
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          データを整理して表示するためのMUIコンポーネント
        </Typography>

        <Stack spacing={4}>
          {/* テーブルコンポーネント */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom color="primary">
              テーブル
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              データを表形式で表示するためのTableコンポーネント
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>名前</TableCell>
                    <TableCell>メール</TableCell>
                    <TableCell>役割</TableCell>
                    <TableCell>ステータス</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ width: 32, height: 32 }}>
                            <PersonIcon />
                          </Avatar>
                          {user.name}
                        </Box>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Chip 
                          label={user.status} 
                          color={user.status === 'アクティブ' ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          {/* リストコンポーネント */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom color="primary">
              リスト
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              情報を縦に並べて表示するListコンポーネント
            </Typography>
            <List>
              {notifications.map((notification, index) => (
                <Box key={notification.id}>
                  <ListItem>
                    <ListItemIcon>
                      <Badge badgeContent={notification.id} color="primary">
                        <EmailIcon color="action" />
                      </Badge>
                    </ListItemIcon>
                    <ListItemText
                      primary={notification.message}
                      secondary={notification.time}
                    />
                    <Chip 
                      label={notification.type} 
                      color={notification.type as any}
                      size="small"
                    />
                  </ListItem>
                  {index < notifications.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>

          {/* アコーディオンコンポーネント */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom color="primary">
              アコーディオン
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              折りたたみ可能なコンテンツを表示するAccordionコンポーネント
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <StarIcon color="primary" />
                  <Typography variant="h6">MUIの特徴</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Material-UIは、GoogleのMaterial Designに基づいたReactコンポーネントライブラリです。
                  豊富なコンポーネント、カスタマイズ可能なテーマ、アクセシビリティの配慮など、
                  プロダクション環境での使用に適した機能を提供します。
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingUpIcon color="secondary" />
                  <Typography variant="h6">学習の進め方</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  1. 基本的なコンポーネントから始める<br/>
                  2. プロパティとバリエーションを理解する<br/>
                  3. 実際のプロジェクトで使用してみる<br/>
                  4. テーマとカスタマイズを学ぶ<br/>
                  5. 高度な機能を習得する
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>

          {/* 学習のポイント */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary">
              学習のポイント
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              • データの構造化と表示方法<br/>
              • テーブルのソートとフィルタリング<br/>
              • リストのインタラクション<br/>
              • アコーディオンの状態管理<br/>
              • レスポンシブなデータ表示<br/>
              • MUI v7の新しいAPI<br/>
              • データ表示コンポーネントの組み合わせ
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export default DataDisplayComponents;
