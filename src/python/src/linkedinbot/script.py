# script.py
import sys

def main():
    print("Hello from Python")
    # Example: Read arguments passed from TypeScript
    if len(sys.argv) > 1:
        print(f"Argument received: {sys.argv[1]}")

if __name__ == "__main__":
    main()
