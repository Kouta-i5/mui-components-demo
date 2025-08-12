import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Switch,
    TextField,
    Typography
} from '@mui/material';
import { useState } from 'react';

const FormComponents = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    newsletter: false,
    notifications: 'email',
    darkMode: false
  });

  const handleChange = (field: string) => (event: any) => {
    setFormData({
      ...formData,
      [field]: event.target.value !== undefined ? event.target.value : event.target.checked
    });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
          フォームコンポーネント学習
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          ユーザー入力とインタラクションのためのMUIコンポーネント
        </Typography>

        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom color="primary">
            テキスト入力
          </Typography>
          <Stack spacing={3} sx={{ mb: 4 }}>
            <TextField
              label="お名前"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange('name')}
              helperText="フルネームを入力してください"
            />
            
            <TextField
              label="メールアドレス"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange('email')}
              helperText="有効なメールアドレスを入力してください"
            />
            
            <TextField
              label="自己紹介"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              placeholder="あなたについて教えてください..."
            />
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h4" gutterBottom color="primary">
            選択コンポーネント
          </Typography>
          <Stack spacing={3} sx={{ mb: 4 }}>
            <FormControl fullWidth>
              <InputLabel>カテゴリ</InputLabel>
              <Select
                value={formData.category}
                label="カテゴリ"
                onChange={handleChange('category')}
              >
                <MenuItem value="frontend">フロントエンド</MenuItem>
                <MenuItem value="backend">バックエンド</MenuItem>
                <MenuItem value="fullstack">フルスタック</MenuItem>
                <MenuItem value="design">デザイン</MenuItem>
              </Select>
            </FormControl>

            <FormControl component="fieldset">
              <Typography variant="h6" gutterBottom>
                通知設定
              </Typography>
              <RadioGroup
                value={formData.notifications}
                onChange={handleChange('notifications')}
              >
                <FormControlLabel value="email" control={<Radio />} label="メール通知" />
                <FormControlLabel value="push" control={<Radio />} label="プッシュ通知" />
                <FormControlLabel value="none" control={<Radio />} label="通知なし" />
              </RadioGroup>
            </FormControl>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h4" gutterBottom color="primary">
            チェックボックスとスイッチ
          </Typography>
          <Stack spacing={2} sx={{ mb: 4 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.newsletter}
                  onChange={handleChange('newsletter')}
                  color="primary"
                />
              }
              label="ニュースレターを購読する"
            />
            
            <FormControlLabel
              control={
                <Switch
                  checked={formData.darkMode}
                  onChange={handleChange('darkMode')}
                  color="primary"
                />
              }
              label="ダークモード"
            />
          </Stack>

          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" size="large">
              フォームを送信
            </Button>
          </Box>
        </Paper>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom color="primary">
            学習のポイント
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            • フォームの状態管理（useState）<br/>
            • バリデーションとエラーハンドリング<br/>
            • アクセシビリティの考慮<br/>
            • レスポンシブフォームデザイン<br/>
            • フォームの送信処理<br/>
            • MUI v7の新しいAPI<br/>
            • フォームコンポーネントの組み合わせ
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default FormComponents;
