from datasets import load_dataset
import pandas as pd

def load_amazon_reviews(category: str = "All_Beauty", max_rows: int = 50000) -> pd.DataFrame:
    """
    Streams the Amazon Reviews dataset for a given category.
    No authentication required.
    """
    print(f"Loading '{category}' reviews (up to {max_rows} rows)...")

    ds = load_dataset(
        "McAuley-Lab/Amazon-Reviews-2023",
        f"raw_review_{category}",
        split="full",
        streaming=True,
        trust_remote_code=True
    )

    records = []
    for i, row in enumerate(ds):
        if i >= max_rows:
            break
        records.append({
            "rating":       row.get("rating"),
            "text":         row.get("text"),
            "verified":     row.get("verified_purchase"),
            "title":        row.get("title"),
            "helpful_vote": row.get("helpful_vote", 0),
        })

    df = pd.DataFrame(records)
    df.to_csv("data/amazon_beauty_50k.csv", index=False)
    print(f"Saved {len(df)} rows to data/amazon_beauty_50k.csv")
    print(df.head())
    print(df.dtypes)
    return df

if __name__ == "__main__":
    load_amazon_reviews()
