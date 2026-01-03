# CF-X Model Güncellemesi - VSCode Extension v1.0.2

## 🎉 Yeni Özellik: CF-X 3 Katmanlı Model Desteği

VSCode extension (Roo Code) artık CF-X modelini **tam 3 katmanlı workflow** ile destekliyor!

## ✨ Yapılan Değişiklikler

### 1. LiteLLM Handler Güncellendi
- `src/api/providers/lite-llm.ts` dosyasına CF-X desteği eklendi
- CF-X modeli seçildiğinde otomatik 3 katmanlı workflow çalışıyor

### 2. İki Çalışma Modu

#### Mod 1: Orchestrator HTTP API (Öncelikli)
- Orchestrator HTTP API'sini kullanır
- Daha hızlı ve merkezi yönetim
- URL: `http://orchestrator:3000/cf-x`

#### Mod 2: Direkt LiteLLM Çağrıları (Fallback)
- Orchestrator API mevcut değilse direkt LiteLLM'e 3 ayrı istek gönderir
- Her katman kendi modelini kullanır:
  1. DeepSeek V3.2 → Plan
  2. MiniMax M2.1 → Code
  3. Gemini 2.5 Flash → Review

### 3. Streaming Desteği
- CF-X workflow streaming destekliyor
- Her katman sonucu gerçek zamanlı gösteriliyor

## 🚀 Kullanım

### VSCode Extension'da

1. **Model Seçimi:**
   - Settings → Providers → LiteLLM
   - Model listesinden `cf-x` veya `cf-x-3-layer` seçin

2. **Otomatik Çalışma:**
   - CF-X seçildiğinde otomatik 3 katmanlı workflow çalışır
   - Her katman sonucu sırayla gösterilir

3. **Sonuç Formatı:**
   ```
   📋 PLAN (DeepSeek V3.2):
   ============================================================
   [Plan içeriği]

   💻 CODE (MiniMax M2.1):
   ============================================================
   [Kod içeriği]

   🔍 REVIEW (Gemini 2.5 Flash):
   ============================================================
   [İnceleme içeriği]

   ✅ CF-X Pipeline tamamlandı!
   ```

## ⚙️ Teknik Detaylar

### Orchestrator URL Tespiti
- LiteLLM base URL'den otomatik tespit edilir
- Örnek: `http://localhost:4000` → `http://localhost:3000`
- Environment variable ile override edilebilir

### Hata Yönetimi
- Orchestrator API mevcut değilse otomatik fallback
- Her katman için ayrı hata kontrolü
- Kullanıcıya anlamlı hata mesajları

## 📦 Versiyon

- **Version**: 1.0.2
- **Release Date**: 2026-01-01
- **Breaking Changes**: Yok

## 🔄 Migration

Mevcut kullanıcılar için:
- ✅ Geriye uyumlu
- ✅ Otomatik CF-X desteği
- ✅ Ekstra yapılandırma gerekmez

## 📝 Notlar

- Orchestrator HTTP API kullanmak için orchestrator servisinin çalışıyor olması gerekir
- Fallback modu her zaman çalışır (orchestrator olmasa bile)
- CF-X modeli LiteLLM config'de tanımlı olmalı

## 🎯 Sonuç

Artık VSCode extension'da CF-X seçildiğinde **tam 3 katmanlı workflow** çalışacak!


